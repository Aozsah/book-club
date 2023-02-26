// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Navigation, Pagination, A11y } from 'swiper';
import './swiper.css'

function SwiperBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/books')
      .then((res) => { 
        setBooks(res.data.data);
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
      {books.map(book => {
        return (
          <SwiperSlide  key={book._id}>
            <Link to={`/book/${book._id}`}>
              <img className='bookImg' src={book.image} alt="Resim Çalışmıyor!"/>
            </Link>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

  export default SwiperBook;
