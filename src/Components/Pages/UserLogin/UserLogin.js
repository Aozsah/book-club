import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import LoginSuccessfulPopup from './LoginSuccessfulPopup';
import Auth from './auth';

const theme = createTheme();

export default function UserLogin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  let navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    // Call the login API with user credentials
    fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: 'include',
    })
      .then((res) => {
        if (res.status === 200) {
          // If the login is successful, set the `loggedIn` state to true and display the success popup.
          setLoggedIn(true);
        } else {
          // If the login is unsuccessful, display the error message in a popup.
          setError(true);
        }
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  };

  const handleCloseError = () => {
    setError(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
          <Typography component="h1" variant="h5">
            Giriş yap
          </Typography>
          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Şifre"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Beni hatırla" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Giriş yap
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="http://localhost:3000/resetpassword" variant="body2">
                  Şifreni mi unuttun?
                </Link>
              </Grid>
              <Grid item>
                <Link href="http://localhost:3000/register" variant="body2">
                  {'Bir hesabın yok mu? Hemen kaydol'}
                </Link>
              </Grid>
            </Grid>
          </Box>
          {loggedIn && <LoginSuccessfulPopup onClose={() => setLoggedIn(false)} />}
          {error && (
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Hatalı Email veya Şifre
              </Typography>
              <Button
                variant="contained"
                onClick={() => {
                  setError(false);
                }}
              >
                Tamam
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
