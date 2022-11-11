import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './SliderBookClub.css'
import axios from 'axios';


function SliderBookClub() {
  const [width, setWidth] = useState(0);
  const [bookClubs, setBookClubs] = useState([]);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  })

  useEffect(() => {
    axios ('https://www.breakingbadapi.com/api/characters?limit=12')
    .then((res) => setBookClubs(res.data))
  }, [])
  return (
    <div>
      <motion.div
        ref={carousel}
        className='clubCarousel'
        whileTap={{cursor:"grabbing"}}>
        <motion.div
          drag="x"
          dragConstraints={{right:0, left: -width}} className='inner-carousel'>
      {bookClubs.map(bookClub => {
            return(
              <motion.div key={bookClub.char_id} className='clubItem'>
                <Link to={`/bookclub/${bookClub.char_id}`}>
                  <img className='clubImg' src={bookClub.img}  />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default SliderBookClub
