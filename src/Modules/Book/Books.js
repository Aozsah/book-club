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
    axios ('https://jsonplaceholder.typicode.com/photos')
    .then((res) => setBooks(res.data))
  }, [])

  return (
  <div className='booksContainer'>
    <ul>
      {books.map(book => {
        return(
          
          <div key={book.id}>
            <ul>
              <li>
                <Link to={`/book/${book.id}`}>
                  <img className='booksImg' src={book.url} alt='book-img'/>
                  <h2 className='booksTitle'>{book.title}</h2>
                </Link>
            </li>
            </ul>
          </div>
        )
      })}
    </ul>     
  </div>
  )
}

export default Books
