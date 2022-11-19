// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Navigation, Pagination, A11y } from 'swiper';
import './swiper.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function SwiperBookClub() {
    const [width, setWidth] = useState(0);
    const [bookClubs, setbookClubs] = useState([]);
    const carousel = useRef();

  
    useEffect(() => {
      axios ('https://www.breakingbadapi.com/api/characters?limit=60')
      .then((res) =>{ 
        setbookClubs(res.data)
      })
    }, [])

  return (

    <Swiper 
    modules={[Navigation, Pagination, A11y]}
    spaceBetween={50}
    slidesPerView={6}
    navigation
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
      {bookClubs.map(bookClub => {
        return(
      <SwiperSlide  key={bookClub.char_id}>
        <Link to={`/bookClub/${bookClub.char_id}`}>
          <img className='bookClubImg' src={bookClub.img} alt="Resim Çalışmıyor!"/>
        </Link>
      </SwiperSlide>
    )})}
    </Swiper>
  )
}
  export default SwiperBookClub;
