import { Image, Stack } from '@chakra-ui/react'
import './BookClubs.css';
import { useState, useEffect } from 'react';
// import Modal from '../../Components/Shared/Pop-up/Modal';
import BookClubData from './BookClubData';
import { Link } from 'react-router-dom'
import axios from 'axios';

function Books() {
  // const [openModal, setOpenModal] = useState(false);
  const [bookClubs, setBookClubs] = useState([]);

  useEffect(() => {
    axios ('https://www.breakingbadapi.com/api/characters?limit=11')
    .then((res) => setBookClubs(res.data))
  }, [])

  return (
  <div className='bookClubsContainer'>
    <ul>
      {bookClubs.map(bookClub => {
        return(
          
          <div key={bookClub.char_id}>

                <Link to={`/bookclub/${bookClub.char_id}`}>
                  <img className='booksImg' src={bookClub.img} alt='book-img'/>
                  <h2 className='booksTitle'>{bookClub.occupation}</h2>
                </Link>

          </div>
        )
      })}
    </ul>     
  </div>
  )
}

export default Books
