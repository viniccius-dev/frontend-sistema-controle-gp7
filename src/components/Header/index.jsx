import * as React from 'react';
import Stack from '@mui/material/Stack';
import ColorModeIconDropdown from '../../styles/shared-theme-material-ui/ColorModeIconDropdown';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Download from '@mui/icons-material/Download';
import { VisuallyHiddenInput } from './styles';

export default function Header() {
  return (
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
        <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ height: '36px' }}
        >
            Upload
            <VisuallyHiddenInput
                type="file"
                onChange={(event) => console.log(event.target.files)}
                multiple
            />
        </Button>

        <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<Download />}
            sx={{ height: '36px' }}
        >
            Download
        </Button>

        <Stack direction="row" sx={{ gap: 1 }}>
            <ColorModeIconDropdown />
        </Stack>
    </Stack>
  );
}