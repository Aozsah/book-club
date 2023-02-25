import { useState } from "react";
import axios from "axios";
import './test.css';

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          setLoggedIn(true);
        }
      })
      .catch((error) => {
        setErrorMessage("Kullanıcı adı veya şifre yanlış.");
      });
  };

  return (
    <div className="login-form">
      {loggedIn ? (
        <p>Giriş yapıldı.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Kullanıcı Adı:</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
          <label>Şifre:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <button type="submit">Giriş</button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
      )}
    </div>
  );
}
