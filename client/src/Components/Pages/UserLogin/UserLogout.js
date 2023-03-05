import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function UserLogout() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage'tan token'ı kaldıralım
    localStorage.removeItem("token");

    auth.setIsLoggedIn(false); // Context'teki setIsLoggedIn fonksiyonunu kullanarak kullanıcı çıkış yaptı
    navigate("/"); // Anasayfaya yönlendirelim
  };

  return <button onClick={handleLogout}>Çıkış Yap</button>;
}
