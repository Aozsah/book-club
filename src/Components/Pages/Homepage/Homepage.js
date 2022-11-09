import React from 'react'
import Books from '../../../Modules/Book/Books'
import BookClubs from '../../../Modules/BookClub/BookClubs'
import './Homepage.css'

function Homepage() {
  return (
    <div className='homepage'>
      <Books />
      <BookClubs />
      <BookClubs />

      <BookClubs />

    </div>
  )
}

export default Homepage
