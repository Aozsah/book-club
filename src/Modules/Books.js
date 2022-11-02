import { Link } from 'react-router-dom'
import { Image, Stack } from '@chakra-ui/react'
import './Books.css';
import React, { useState } from 'react';
import Modal from '../Components/Shared/Pop-up/Modal';
import Data from './Data';

function Books() {
  const [openModal, setOpenModal] = useState(false);

  return (
    
    <div>
      <ul>

      {Data.map((item,index) => {
        return(
          <Stack direction='row' spacing={4} className= "homepage-books">
                <li className='block'>         
          <Link to={item.link}><Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
            </Link>       
            <button onClick={() => setOpenModal(true)} className='modalButton'>Kitabı İncele</button><Modal open={openModal} onClose={() => setOpenModal(false)} />
            </li>
          </Stack>
        )
      })}

      </ul>      
    </div>
  )
}

export default Books
