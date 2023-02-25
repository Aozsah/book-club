import { useState } from "react";
import axios from "axios";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import LoginSuccessfulPopup from "./LoginSuccessfulPopup";
import LoginErrorPopup from "./LoginErrorPopup";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/login", { username, password })
      .then((response) => {
        if (response.status === 200) {
          setLoggedIn(true);
        }
      })
      .catch((error) => {
        setErrorMessage("Kullanıcı adı veya şifre yanlış.");
        setPassword("");
      });
  };

  const handleCloseError = () => {
    setErrorMessage("");
  };

  let navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
          <Typography component="h1" variant="h5">
            Giriş yap
          </Typography>
          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Kullanıcı Adı"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(event) => setUsername(event.target.value)}
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
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Beni hatırla"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Giriş yap
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/resetpassword" variant="body2">
                  Şifreni mi unuttun?
                </Link>
              </Grid>
              <Grid item>
                <Typography component="span">{"Bir hesabın yok mu? "}</Typography>
                <Link href="/register" variant="body2">
                  Hemen kaydol
                </Link>
              </Grid>
            </Grid>
          </Box>
          {loggedIn && <LoginSuccessfulPopup onClose={() => setLoggedIn(false)} />}
          {errorMessage && (
            <LoginErrorPopup onClose={handleCloseError} errorMessage={errorMessage} />
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
