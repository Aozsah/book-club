import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Navigation, Pagination, A11y } from 'swiper';
import './swiper.css'

function SwiperBookClub() {
  const [bookClubs, setBookClubs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/bookclubs')
      .then((res) => { 
        setBookClubs(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Swiper 
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
    >
      {bookClubs.map(bookClub => {
        return (
          <SwiperSlide  key={bookClub._id}>
            <Link to={`/bookclub/${bookClub._id}`}>
              <img className='bookClubImg' src={bookClub.image} alt="Resim Çalışmıyor!"/>
            </Link>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default SwiperBookClub;
