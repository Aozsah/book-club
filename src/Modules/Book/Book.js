import {  Route,Routes,Link } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import './Book.css'
import { useParams } from 'react-router-dom'
import BookData from './BookData'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Book() {
  const [book, setBook] = useState({})
  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then((res) => setBook(res.data))

  }, [id])

  return (
    <div className='book_container'>
      <div key={book.id}>
        <ul>
          <li>
            <h1 className='bookTitle'>{book.title} </h1>
              <img className='bookImg' src={book.url} alt='book-img'/>
                <div className='bookFooter'>
                  <h2 className='bookAuthor'>Author</h2>
                  <a className='bookLink' href={`/book/${parseInt(id) +1}`}>Next Book ({parseInt(id)+1})</a>
                
                </div>
                <div className='bookDescription'>
                <code>{JSON.stringify(book)}</code>
                </div>
          </li>
        </ul>
      </div>
     
      <br />
      <br />
      <br />
    </div>
    
    
  )
}

export default Book
