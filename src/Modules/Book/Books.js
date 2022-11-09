import { Image, Stack } from '@chakra-ui/react'
import './Books.css';
import { useState, useEffect } from 'react';
// import Modal from '../../Components/Shared/Pop-up/Modal';
import BookData from './BookData';
import { Link } from 'react-router-dom'
import axios from 'axios';

function Books() {
  // const [openModal, setOpenModal] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios ('https://www.breakingbadapi.com/api/characters?limit=7')
    .then((res) => setBooks(res.data))
  }, [])

  return (
  <div className='booksContainer'>
    <ul>
      {books.map(book => {
        return(
          
          <div key={book.id}>
              <li>
                <Link to={`/book/${book.char_id}`}>
                  <img className='booksImg' src={book.img} alt='book-img'/>
                  <h2 className='booksTitle'>{book.occupation}</h2>
                </Link>
            </li>
          </div>
        )
      })}
    </ul>     
  </div>
  )
}

export default Books
