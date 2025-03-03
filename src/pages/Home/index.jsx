import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { SideMenu } from "../../components/SideMenu";
import { AppNavbar} from "../../components/AppNavbar";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MainGrid from "../../components/MainGrid";

import AppTheme from '../../styles/shared-theme-material-ui/AppTheme';
import { chartsCustomizations } from '../../styles/shared-theme-material-ui/customizations/charts';
import { dataGridCustomizations } from '../../styles/shared-theme-material-ui/customizations/dataGridCustomizations';
import { datePickersCustomizations } from '../../styles/shared-theme-material-ui/customizations/datePickers';
import { treeViewCustomizations } from '../../styles/shared-theme-material-ui/customizations/treeView';

const xThemeComponents = {
    ...chartsCustomizations,
    ...dataGridCustomizations,
    ...datePickersCustomizations,
    ...treeViewCustomizations,
  };

export function Home(props) {
    return (
        <AppTheme {...props} themeComponents={xThemeComponents}>
            <CssBaseline enableColorScheme />
            <Box sx={{ display: 'flex' }}>
                <SideMenu />
                <AppNavbar />
                {/* Main Content */}
                <Box
                component="main"
                sx={(theme) => ({
                    flexGrow: 1,
                    backgroundColor: theme.vars
                    ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                    : alpha(theme.palette.background.default, 1),
                    overflow: 'auto',
                })}
                >
                    <Stack
                        sx={{
                        alignItems: 'center',
                        mx: 3,
                        pb: 5,
                        mt: { xs: 8, md: 0 },
                        }}
                    >
                        <MainGrid />
                    </Stack>
                </Box>
            </Box>
        </AppTheme>
    );
}