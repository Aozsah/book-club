import { Image, Stack } from '@chakra-ui/react'
import './Books.css';
import { useState, useEffect } from 'react';
// import Modal from '../../Components/Shared/Pop-up/Modal';
import BookData from './BookData';
import { Link } from 'react-router-dom'
import axios from 'axios';

function Books() {
  // const [openModal, setOpenModal] = useState(false);
  const [loading,setLoading] = useState(true)
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios ('https://jsonplaceholder.typicode.com/users')
    .then((res) => setBooks(res.data))
    .finally(() => setLoading(false))
  }, [])

  return (
    
    <div>
                {loading && <div>Loading...</div>}

      <ul>

      {BookData.map((item) => {
        return(
          <Stack direction='row' spacing={4} className= "homepage-books" key={item.id}>
                <li className='block' >   
                <Link to={`book/${item.id}`}>  
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
