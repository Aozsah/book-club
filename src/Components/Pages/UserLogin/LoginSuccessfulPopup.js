import React, { useRef, useEffect } from 'react';
import './LoginSuccessfulPopup.css';

export default function LoginSuccessfulPopup({ onClose }) {
  const popupRef = useRef(null);

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose, popupRef]);

  return (
    <div className="login-successful-popup">
      <div className="popup-content" ref={popupRef}>
        <h2 className="popup-title">Giriş başarılı</h2>
        <p className="popup-message">Başarıyla giriş yaptınız!</p>
        <button className="popup-close" onClick={handleClose}>
          Tamam
        </button>
      </div>
    </div>
  );
}
