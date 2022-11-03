import {  Link } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import './Book.css'


function Book() {
  return (
    <div className='book_container'>
      <Link><Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/350' className='book-img'/></Link>
      <div className='book_description'>
      <h1 className='book_name'>book name</h1>
      <h2 className='book_author'>Author</h2>
      </div>
      <p  className='book_summary'>Here is the description of the book.Here is the description of the book.Here is the description of the book.Here is the description of the book.Here is the description of the book.Here is the description of the book.Here is the description of the book.</p>
    </div>
  )
}

export default Book
