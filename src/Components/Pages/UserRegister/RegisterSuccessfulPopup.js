import React, { useRef, useEffect } from 'react';
import './RegisterSuccessfulPopup.css';

export default function RegisterSuccessfulPopup({ onClose }) {
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
    <div className="register-successful-popup">
      <div className="popup-content" ref={popupRef}>
        <h2 className="popup-title">Kayıt Başarılı</h2>
        <p className="popup-message">Başarıyla kayıt oldunuz!</p>
        <button className="popup-close" onClick={handleClose}>
          Tamam
        </button>
      </div>
    </div>
  );
}
