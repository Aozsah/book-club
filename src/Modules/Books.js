import { Link } from 'react-router-dom'
import { Image, Stack } from '@chakra-ui/react'
import './Books.css';


function Books() {
  return (
    <div>
        <ul>
            <Stack direction='row' spacing={4} className= "homepage-books">
            <li>
            <Link to="/Book1"><Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/100' /></Link>
            </li> 
            <li>
            <Link to="/Book2"><Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/100' /></Link>
            </li> 
            <li>
            <Link to="/Book3"><Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/100' /></Link>
            </li> 
            <li>
            <Link to="/Book4"><Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/100' /></Link>
            </li> 
            </Stack>
        </ul>
    </div>
  )
}

export default Books
