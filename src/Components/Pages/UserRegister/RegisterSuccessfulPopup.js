import React, { useRef, useEffect } from 'react';
import './RegisterSuccessfulPopup.css';

export default function RegisterSuccessfulPopup({ isOpen, onClose }) {
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

  if (!isOpen) {
    return null;
  }

  return (
    <div className="register-successful-popup">
      <div className="popup-content" ref={popupRef}>
        <h2 className="popup-title">Kaydınız başarıyla tamamlandı</h2>
        <p className="popup-message">Hoş geldiniz!</p>
        <button className="popup-close" onClick={handleClose}>
          Tamam
        </button>
      </div>
    </div>
  );
}
