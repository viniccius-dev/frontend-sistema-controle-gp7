import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { Card, SignInContainer } from './styles';
import ColorModeSelect from '../../styles/shared-theme-material-ui/ColorModeSelect';
import gp7Icon from '../../assets/gp7-logo.jpeg'
import { useAuth } from '../../hooks/auth';
import { blue } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';

export function SignIn() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const { signIn } = useAuth();

  async function handleSubmit(event) {
    if (emailError || passwordError) {
      event.preventDefault();
      return;
    }
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setLoading(true);
    await signIn({ 
      email: data.get('email'), 
      password: data.get('password'),
    });
    setLoading(false);
  };

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Por favor insira um e-mail válido.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value) {
      setPasswordError(true);
      setPasswordErrorMessage('Por favor insira uma senha.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <>
      <SignInContainer direction="column" justifyContent="space-between">
        <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
        <Card variant="outlined">
          <Typography sx={{ textAlign: 'center' }}>
            <img src={gp7Icon} alt="GP7 Icon" style={{ width: 60, height: 60 }} />
          </Typography>
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', textAlign: 'center' }}
          >
            Acesse sua conta
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <TextField
                error={emailError}
                helperText={
                  <span style={{ color: 'rgb(252, 44, 33)', fontWeight: 'bold' }}>{emailErrorMessage}</span>
                }
                id="email"
                type="email"
                name="email"
                placeholder="seu@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Senha</FormLabel>
              <TextField
                error={passwordError}
                helperText={
                  <span style={{ color: 'rgb(252, 44, 33)', fontWeight: 'bold' }}>{passwordErrorMessage}</span>
                }
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
              disabled={loading}
              startIcon={loading ? <CircularProgress size={20} color="primary" /> : null}
              sx={{
                bgcolor: loading ? (isDarkMode ? "grey.800" : blue[700]) : "primary.main",
                color: isDarkMode ? "black" : "white",
                "&.Mui-disabled": {
                  bgcolor: isDarkMode ? "grey.700" : blue[700],
                  color: isDarkMode ? "black" : "white",
                },
              }}
            >
              {loading ? "Carregando..." : "Entrar"}
            </Button>
          </Box>
        </Card>
      </SignInContainer>
    </>
  );
}