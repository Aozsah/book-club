import React, { useState, useRef, useEffect } from 'react';
import './SuccessfulLogin.css';

export default function LoginSuccessfulPopup() {
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSuccessfulLogin = () => {
    setOpen(true);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popupRef]);

  return (
    <div>
      <button onClick={handleSuccessfulLogin}>Login</button>
      {open && (
        <div className="login-successful-popup">
          <div className="popup-content" ref={popupRef}>
            <h2 className="popup-title">Login Successful</h2>
            <p className="popup-message">You have successfully logged in!</p>
            <button className="popup-close" onClick={handleClose}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
