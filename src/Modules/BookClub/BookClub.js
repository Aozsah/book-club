import {  Link } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import './BookClub.css'


function club() {
  return (
    <div className='club_container'>
      <Link><Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/350' className='club-img'/></Link>
      <div className='club_description'>
      <h1 className='club_name'>club name</h1>
      </div>
      <p  className='club_summary'>Here is the description of the club.Here is the description of the club.Here is the description of the club.Here is the description of the club.Here is the description of the club.Here is the description of the club.Here is the description of the club.</p>
      <button>Bize katıl!</button>
    </div>
  )
}

export default club
