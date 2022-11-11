import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './SliderBook.css'
import axios from 'axios';


function SliderBook() {
  const [width, setWidth] = useState(0);
  const [books, setBooks] = useState([]);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  })

  useEffect(() => {
    axios ('https://www.breakingbadapi.com/api/characters?limit=10')
    .then((res) => setBooks(res.data))
  }, [])
  return (
    <div className='sliderContainer'>
      <motion.div
        ref={carousel}
        className='bookCarousel'
        whileTap={{cursor:"grabbing"}}>
        <motion.div
          drag="x"
          dragConstraints={{right:0, left: -width}} className='bookInnerCarousel'>
          {books.map(book => {
            return(
              <motion.div key={book.char_id} className='bookItem'>
                <Link to={`/book/${book.char_id}`}>
                  <img className='bookImg' src={book.img} />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default SliderBook
