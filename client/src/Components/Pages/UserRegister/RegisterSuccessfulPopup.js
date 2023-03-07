import React, { useRef, useEffect } from 'react';
import './RegisterSuccessfulPopup.css';
import { useNavigate } from 'react-router-dom';

export default function RegisterSuccessfulPopup({ isOpen, onClose }) {
  const navigate = useNavigate()
  const popupRef = useRef(null);

  const handleClose = () => {
    onClose();
    navigate("/")
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    const timeoutId = setTimeout(() => {
      if (isOpen) {
        onClose();
      }
    }, 3000);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      clearTimeout(timeoutId);
    };
  }, [isOpen, onClose, popupRef]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div className="register-successful-popup">
      <div className="popup-content" ref={popupRef}>
        <h2 className="popup-title">Kaydın başarıyla tamamlandı</h2>
        <p className="popup-message">Şimdi Giriş Yapabilirsin🙂</p>
        <button className="popup-close" onClick={handleClose}>
          Tamam
        </button>
      </div>
    </div>
  );
}
