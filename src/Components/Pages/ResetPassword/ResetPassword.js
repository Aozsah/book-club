import React, { useRef } from "react";
import './ResetPassword.css'
import { useNavigate } from 'react-router-dom'


const Reset = () => {
    let navigate = useNavigate();

  return (
    <div className="resetpass">
        <label>Yeni Şifreni Gir</label>
        <input type="text" />
        <label>Yeni Şifreni Tekrar Gir</label>
        <input type="text" />
        <input  type="submit" value="Sıfırla" />
    </div>
  );
};

export default Reset;
