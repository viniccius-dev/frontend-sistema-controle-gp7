import { Avatar, Box, Stack, Typography } from "@mui/material";
import { Drawer } from "./styles";
import { drawerClasses } from '@mui/material/Drawer';
import { MenuContent } from "../MenuContent";
import { OptionsMenu } from "../OptionsMenu";
import { useAuth } from "../../hooks/auth";

export function SideMenu() {
    
    const { user } = useAuth();
    
    function stringToColor(string) {
        let hash = 0;
        let i;

        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';    

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        
        return color;
    }
    
    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}`,
        };
    }

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
                    {...stringAvatar(user.name)}
                />
                <Box sx={{ mr: "auto", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
                        { user.name }
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
                        title={user.email}
                    >
                        {user.email}
                    </Typography>
                </Box>
                <OptionsMenu />
            </Stack>
        </Drawer>
    );
}