import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import images from '../../../assets/images/images'
import './Slider.css'
import axios from 'axios';


function Slider() {
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
    <div>
      <motion.div
        ref={carousel}
        className='carousel'
        whileTap={{cursor:"grabbing"}}>
        <motion.div
          drag="x"
          dragConstraints={{right:0, left: -width}} className='inner-carousel'>
          {books.map(book => {
            return(
              <motion.div key={book.char_id} className='item'>
              <img className='motionImg' src={book.img} />
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slider
