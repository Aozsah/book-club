import { Image, Stack } from '@chakra-ui/react'
import './Books.css';
import React, { useState } from 'react';
import Modal from '../../Components/Shared/Pop-up/Modal';
import BookData from './BookData';

function Books() {
  const [openModal, setOpenModal] = useState(false);

  return (
    
    <div>
      <ul>

      {BookData.map((item) => {
        return(
          <Stack direction='row' spacing={4} className= "homepage-books" key={item.id}>
                <li className='block' >         
          <Image className='booksImg' src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' onClick={() => setOpenModal(true)} /><Modal open={openModal} onClose={() => setOpenModal(false)} />
      
            <button onClick={() => setOpenModal(true)} className='modalButton'>Kitabı İncele</button>
            </li>
          </Stack>
        )
      })}

      </ul>     
      <Modal open={openModal} onClose={() => setOpenModal(false)} /> 
    </div>
  )
}

export default Books
