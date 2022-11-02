import { Link } from 'react-router-dom'
import { Image, Stack } from '@chakra-ui/react'
import React, { useState } from 'react';
import Modal from '../Components/Shared/Pop-up/Modal';
import BookClubData from './BookData';
import './BookClubs.css';


function BookClubs() {
  const [openModal, setOpenModal] = useState(false);

  return (
    
    <div>
      <ul>

      {BookClubData.map((item,index) => {
        return(
          <Stack direction='row' spacing={4} className= "homepage-books">
                <li className='block'>         
            <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' onClick={() => setOpenModal(true)} /><Modal open={openModal} onClose={() => setOpenModal(false)} />
    
            <button onClick={() => setOpenModal(true)} className='modalButton'>Klübü İncele</button><Modal open={openModal} onClose={() => setOpenModal(false)} />
            </li>
          </Stack>
        )
      })}

      </ul>      
    </div>
  )
}

export default BookClubs
