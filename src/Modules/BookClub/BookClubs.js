import { Image, Stack } from '@chakra-ui/react'
import './BookClubs.css';
import { useState, useEffect } from 'react';
import BookClubData from './BookClubData'
// import Modal from '../../Components/Shared/Pop-up/Modal';
import { Link } from 'react-router-dom'
import axios from 'axios';

function Books() {
  // const [openModal, setOpenModal] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios ('https://jsonplaceholder.typicode.com/users')
    .then((res) => setBooks(res.data))
  }, [])

  return (
    
    <div>

      <ul>

      {BookClubData.map((item) => {
        return(
          <Stack direction='row' spacing={4} className= "homepage-books" key={item.id}>
                <li className='block' >   
                <Link to={`bookclub/${item.id}`}>  
          <Image className='booksImg' src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
      </Link>
            <button>{item.title}</button>
            </li>
          </Stack>
        )
      })}

      </ul>     
     
    </div>
  )
}

export default Books
