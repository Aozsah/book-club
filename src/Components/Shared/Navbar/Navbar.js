import  './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Image} from '@chakra-ui/react'

function Navbar() {
  return (
    <nav className='nav'>
        <div className='nav-left'>
            <div className='logo'>
                <Link to="/"><Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' /></Link>
            </div>
            <h1 className='slogan'>A ROOM WITHOUT BOOKS<br/> IS LIKE A BODY WITHOUT SOUL</h1>
            
        </div>
        <div className='nav-right'>
        <Stack direction='row' spacing={3}>

            <Link to="/Register">
                <Button className='navButtons' colorScheme='teal'>Kaydol</Button>
            </Link>
            <Link to="/Login">
                <Button className='navButtons' colorScheme='blue'>Giriş Yap</Button>
            </Link>
            <Link to="/ContactUs">
                <Button className='navButtons' colorScheme='twitter'>İletişim</Button>
            </Link>
        </Stack>
        </div>
    </nav>
  )
}

export default Navbar
