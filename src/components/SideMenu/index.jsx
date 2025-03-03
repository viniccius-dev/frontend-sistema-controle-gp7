import { Avatar, Box, Stack, Typography } from "@mui/material";
import { Drawer } from "./styles";
import { drawerClasses } from '@mui/material/Drawer';
import { MenuContent } from "../MenuContent";
import { OptionsMenu } from "../OptionsMenu";

export function SideMenu() {
    return (
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', md: 'block' },
                [`& .${drawerClasses.paper}`]: {
                backgroundColor: 'background.paper',
                },
            }}
        >
            <Box
                sx={{
                overflow: 'auto',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                }}
            >
                <MenuContent />
            </Box>   
            
            <Stack
                direction="row"
                sx={{
                    p: 2,
                    gap: 1,
                    alignItems: 'center',
                    borderTop: '1px solid',
                    borderColor: 'divider'
                }}
            >
                <Avatar 
                    sizes="small"
                    alt="Imagem do usuário Logado"
                    src="https://github.com/viniccius-dev.png/"
                />
                <Box sx={{ mr: "auto" }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
                        Marcos Vinícius
                    </Typography>
                    <Typography 
                        variant="caption" 
                        sx={{ 
                            color: 'text.secondary', 
                            textOverflow: 'ellipsis', 
                            width: '120px',
                            display: 'inline-block',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                        }}
                        title="vinicciusdev@gmail.com"
                    >
                        vinicciusdev@gmail.com
                    </Typography>
                </Box>
                <OptionsMenu />
            </Stack>
        </Drawer>
    );
}