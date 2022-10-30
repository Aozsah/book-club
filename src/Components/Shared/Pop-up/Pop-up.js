import React, { useState } from 'react';
import './Pop-up.css';
import Modal from './Modal';

function Popup() {
  const [openModal, setOpenModal] = useState(false);



  return (
    <div>
      <button 
      onClick={() => setOpenModal(true)} 
      className='modalButton'>
      </button>
      <Modal 
      open={openModal} 
      onClose={() => setOpenModal(false)} />
      </div>
  );
}

export default Popup;