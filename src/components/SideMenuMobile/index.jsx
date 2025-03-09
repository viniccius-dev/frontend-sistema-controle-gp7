import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { MenuContent } from '../MenuContent';
import { useAuth } from "../../hooks/auth";

export default function SideMenuMobile({ open, toggleDrawer }) {
    
  const { user, signOut } = useAuth();
  const navigation = useNavigate();

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

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        [`& .${drawerClasses.paper}`]: {
          backgroundImage: 'none',
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Stack
        sx={{
          maxWidth: '70dvw',
          height: '100%',
        }}
      >
        <Stack direction="row" sx={{ p: 2, pb: 0, gap: 1 }}>
          <Stack
            direction="row"
            sx={{ gap: 1, alignItems: 'center', flexGrow: 1, p: 1 }}
          >
            <Avatar
              sizes="small"
              alt="Imagem Marcos Vinícius"
              sx={{ width: 24, height: 24 }}
              {...stringAvatar(user.name)}
            />
            <Typography component="p" variant="h6">
              {user.name}
            </Typography>
          </Stack>
        </Stack>
        <Divider />
        <Stack sx={{ flexGrow: 1 }}>
          <MenuContent />
          <Divider />
        </Stack>
        <Stack sx={{ p: 2 }}>
          <Button onClick={handleSignOut} variant="outlined" fullWidth startIcon={<LogoutRoundedIcon />}>
            Sair
          </Button>
        </Stack>
      </Stack>
    </Drawer>
  );
}

SideMenuMobile.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func.isRequired,
};