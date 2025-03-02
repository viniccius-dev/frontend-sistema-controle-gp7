import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { AppRoutes } from "./routes";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import { StyledEngineProvider } from "@mui/material";
import AppTheme from "./styles/shared-theme-material-ui/AppTheme";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTheme>

      <ThemeProvider theme={theme}>

        <StyledEngineProvider injectFirst>
        
          <GlobalStyles />
          <AppRoutes />
        
        </StyledEngineProvider>
      
      </ThemeProvider>
    
    </AppTheme>
  </React.StrictMode>
)
