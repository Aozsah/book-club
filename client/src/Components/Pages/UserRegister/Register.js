import * as React from 'react';
import axios from 'axios';
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
import RegisterSuccessfulPopup from './RegisterSuccessfulPopup';
import validator from "email-validator";

export default function Register() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (!validator.validate(email)) {
      alert("Lütfen geçerli bir e-posta adresi girin.");
      return;
    }
  
    axios
      .post("http://localhost:3001/register", {
        username,
        email,
        password,
        confirmPassword,
      })
      .then((response) => {
        if (response.status === 201) {
          setShowPopup(true);
        } else {
          console.log("Registration failed");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          alert(error.response.data.msg);
        } else {
          console.log(error);
        }
      });
      if (password != confirmPassword){
        return alert("Girdiğiniz şifreler eşleşmiyor!")
      }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Kaydol
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Kullanıcı adı"
                  name="username"
                  autoComplete="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Şifre"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Şifreyi Onayla"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Bültenlere abone olmak istiyorum."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Kayıt Ol
            </Button>
          </Box>
          {showPopup && <RegisterSuccessfulPopup onClose={handleClosePopup} />}

        </Box>

      </Container>
    </ThemeProvider>
  );
}
