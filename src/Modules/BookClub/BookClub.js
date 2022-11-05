import {  Route,Routes,Link } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import './BookClub.css'
import { useParams } from 'react-router-dom'
import BookClubData from './BookClubData'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Book() {
  const [loading,setLoading] = useState(true)
  const [book, setBook] = useState({})
  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => setBook(res.data))
    .finally(() => setLoading(false))

  }, [id])

  return (
    <div className='book_container'>
      {loading && <div>Loading...</div>}

      <code>
        {JSON.stringify(book) }
      </code>
      <br />
      <br />
      <br />
      <Link to={`/bookclub/${parseInt(id) +1}`}>Next Club ({parseInt(id)+1})</Link>
    </div>
    
    
  )
}

export default Book
