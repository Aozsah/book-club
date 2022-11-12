import React from 'react'
import SliderBook from '../../Functions/Slider/SliderBook'
import SliderBookClub from '../../Functions/Slider/SliderBookClub'
import './Homepage.css'


function Homepage() {
  return (
    <div className='homepage'>
      <SliderBook />
      <SliderBookClub />

    </div>
  )
}

export default Homepage
