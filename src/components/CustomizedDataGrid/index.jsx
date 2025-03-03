import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows as initialRows } from '../../data/gridData';
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function CustomizedDataGrid() {

  const [open, setOpen] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(null);
  const [rows, setRows] = React.useState(initialRows);
  const [formData, setFormData] = React.useState({
    pallet: "",
    ballast: "",
    boxes: "",
    units: "",
  });
  
  const handleEditClick = (id) => {
    const selectedRow = rows.find((row) => row.id === id);
    if(selectedRow) {
      setFormData({
        pallet: selectedRow.pallet,
        ballast: selectedRow.ballast,
        boxes: selectedRow.boxes,
        units: selectedRow.units,
      });
    };
    setSelectedId(id);
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
    setSelectedId(null);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  
  const handleSave = () => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === selectedId ? { ...row, ...formData } : row
      )
    )

    // Encontrar o próximo ID na lista
    const currentIndex = rows.findIndex((row) => row.id === selectedId);
    const nextRow = rows[currentIndex + 1]; // Próximo item na lista

    if (nextRow) {
      // Se houver um próximo ID, atualizar os dados no modal
      setSelectedId(nextRow.id);
      setFormData({
        pallet: nextRow.pallet,
        ballast: nextRow.ballast,
        boxes: nextRow.boxes,
        units: nextRow.units,
      });
    } else {
      // Se não houver próximo ID, fechar o modal
      handleClose();
    }
  }
  
  // Adicionando a coluna de edição
  const columnsWithEdit = [
    ...columns,
    {
      field: "edit",
      headerName: "Editar",
      flex: 1,
      minWidth: 60,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <IconButton 
          sx={{ width: '25px', height: '25px' }} 
          size='small' 
          color="primary" 
          onClick={() => handleEditClick(params.row.id)}
        >
          <EditIcon />
        </IconButton>
      ),
    },
  ];
  
  return (
    <>

      <DataGrid
        rows={rows}
        columns={columnsWithEdit}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
        initialState={{
          pagination: { paginationModel: { pageSize: 20 } },
        }}
        pageSizeOptions={[10, 20, 50]}
        disableColumnResize
        density="compact"
        slotProps={{
          filterPanel: {
            filterFormProps: {
              logicOperatorInputProps: {
                variant: 'outlined',
                size: 'small',
              },
              columnInputProps: {
                variant: 'outlined',
                size: 'small',
                sx: { mt: 'auto' },
              },
              operatorInputProps: {
                variant: 'outlined',
                size: 'small',
                sx: { mt: 'auto' },
              },
              valueInputProps: {
                InputComponentProps: {
                  variant: 'outlined',
                  size: 'small',
                },
              },
            },
          },
        }}
      />
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editar Registro</DialogTitle>
        <DialogContent>
          <p>Bohemia 350ml - ID: {selectedId}</p>
          <Grid container sx={{ pt:4 }} spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Pallet"
                name="pallet"
                value={formData.pallet}
                onChange={handleChange}
                type="number"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Lastro"
                name="ballast"
                value={formData.ballast}
                onChange={handleChange}
                type="number"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Caixas"
                name="boxes"
                value={formData.boxes}
                onChange={handleChange}
                type="number"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Unidades"
                name="units"
                value={formData.units}
                onChange={handleChange}
                type="number"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleSave} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>

    </>
    
  );
}
