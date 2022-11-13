import {  Route,Routes,Link } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import './BookClub.css'
import { useParams } from 'react-router-dom'
import BookClubData from './BookClubData'
import { useEffect, useState } from 'react'
import axios from 'axios'

function BookClub() {
  const [bookClub, setBookClub] = useState({})
  const { id } = useParams();

  useEffect(() => {
    axios(`https://www.breakingbadapi.com/api/characters/${id}`)
    .then((res) => {
      setBookClub(res.data[0])
      console.log(res)
    })

  }, [id])

  return (
    <div className='bookClub_container'>
      <div>
        <ul>
          <li>
            <h1 className='bookClubTitle'>{bookClub.title} </h1>
              <img className='bookClubImg' src={bookClub.img} alt='bookClub-img'/>
                <div className='bookClubFooter'>
                  <h2 className='bookClubAuthor'>Author</h2>
                  <a className='bookClubLink' href={`/bookClub/${parseInt(id) +1}`}>Next bookClub ({parseInt(id)+1})</a>
                
                </div>
                <div className='bookClubDescription'>
                <code>{JSON.stringify(bookClub)}</code>
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

export default BookClub
