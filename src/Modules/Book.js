import { useParams, Link } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import './Book.css'


function Book() {
const {id} = useParams()
  return (
    <div>
      <Link><Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/350' className='book-img'/></Link>
      id:{id}
    </div>
  )
}

export default Book
