import React from 'react'
import SwiperBook from '../../Functions/Swiper/SwiperBook'
import SwiperBookClub from '../../Functions/Swiper/SwiperBookClub'

import './Homepage.css'


function Homepage() {
  return (
    <div className='homepage'>
      <SwiperBook />
      <SwiperBookClub />

    </div>
  )
}

export default Homepage
