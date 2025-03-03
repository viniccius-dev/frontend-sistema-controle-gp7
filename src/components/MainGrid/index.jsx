import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomizedDataGrid from '../CustomizedDataGrid';

export default function MainGrid() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2, mt: 2 }}>
        Contagem
      </Typography>
      <Grid container>
        {/* <Grid size={{ xs: 12, lg: 9 }}> */}
        <Grid sx={{ width: '100%' }}>
          <CustomizedDataGrid />
        </Grid>
      </Grid>
    </Box>
  );
}
