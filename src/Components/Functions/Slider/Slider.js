import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import images from '../../../assets/images/images'

function Slider() {
  console.log(images)
  return (
    <div>
      <motion.div className='carousel'>
        <motion.div className='inner-carousel'>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slider
