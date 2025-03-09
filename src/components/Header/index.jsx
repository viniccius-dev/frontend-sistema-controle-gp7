import * as React from 'react';
import Stack from '@mui/material/Stack';
import ColorModeIconDropdown from '../../styles/shared-theme-material-ui/ColorModeIconDropdown';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Download from '@mui/icons-material/Download';
import CircularProgress from '@mui/material/CircularProgress';
import { VisuallyHiddenInput } from './styles';
import Papa from 'papaparse';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

export default function Header() {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [uploadLoading, setUploadLoading] = React.useState(false);
  const [downloadLoading, setDownloadLoading] = React.useState(false);

  const { user } = useAuth();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setOpenDialog(true);
    }
  };

  const handleConfirmUpload = async () => {
    if (!selectedFile) return;
    setUploadLoading(true);

    Papa.parse(selectedFile, {
      header: true,
      skipEmptyLines: true,
      encoding: "UTF-8",
      complete: async function (result) {
        try {
          const response = await api.post("/count", { data: result.data });
          alert(response.data.message);
          window.location.reload();
        } catch (error) {
          alert("Erro no upload. Tente novamente.");
          console.error("Erro ao enviar dados:", error.message);
        } finally {
          setUploadLoading(false);
          setOpenDialog(false);
        }
      },
    });
  };

  const handleDownload = React.useCallback(async () => {
    try {
      setDownloadLoading(true);
      const response = await api.get("/count/export", {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'count.csv');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Erro ao exportar a contagem", error);
      alert("Erro ao exportar a contagem. Tente novamente.");
    } finally {
      setDownloadLoading(false);
    }
  }, []);

  return (
    <>
      <Stack
        direction="row"
        sx={{
          display: { xs: 'none', md: 'flex' },
          width: '100%',
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'right',
          maxWidth: { sm: '100%', md: '1700px' },
          pt: 1.5,
          gap: '5px'
        }}
      >

        {user.role === "admin" && (
          <Button
            component="label"
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ height: '36px' }}
          >
            Upload
            <VisuallyHiddenInput type="file" accept=".csv" onChange={handleFileChange} />
          </Button>
        )}

        {user.role === "admin" && (
          <Button
            variant="contained"
            tabIndex={-1}
            startIcon={downloadLoading ? <CircularProgress size={20} color="primary" /> : <Download />}
            sx={{ height: '36px' }}
            onClick={handleDownload}
            disabled={downloadLoading}
          >
            {downloadLoading ? "Baixando..." : "Download"}
          </Button>
        )}

        <Stack direction="row" sx={{ gap: 1 }}>
          <ColorModeIconDropdown />
        </Stack>
      </Stack>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Deseja confirmar o upload do arquivo?</DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="error" disabled={uploadLoading}>
            Cancelar
          </Button>
          <Button 
            onClick={handleConfirmUpload} 
            color="primary" 
            disabled={uploadLoading}
            startIcon={uploadLoading ? <CircularProgress size={20} color="primary" /> : null}
          >
            {uploadLoading ? "Enviando..." : "Confirmar"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
