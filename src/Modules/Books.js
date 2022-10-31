import { Link } from 'react-router-dom'
import { Image, Stack } from '@chakra-ui/react'
import './Books.css';
import React, { useState } from 'react';
import Modal from '../Components/Shared/Pop-up/Modal';



function Books() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
        <ul>
            <Stack direction='row' spacing={4} className= "homepage-books">
            <li>
            <Link to="/Book1"><Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
            </Link>
            <button onClick={() => setOpenModal(true)} className='modalButton'>Kitabı İncele</button><Modal open={openModal} onClose={() => setOpenModal(false)} />

            </li> 
            <li>
            <Link to="/Book2"><Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' /></Link>
            </li> 
            <li>
            <Link to="/Book3"><Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' /></Link>
            </li> 
            <li>
            <Link to="/Book4"><Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' /></Link>
            </li> 
            </Stack>
        </ul>
    </div>
  )
}

export default Books
