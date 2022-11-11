import  './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Image} from '@chakra-ui/react'
import BookHubLogo from '..//..//..//assets/images/BookHubLogo.png'

function Navbar() {
  return (
    <nav className='nav'>
        <div className='nav-left'>
            <div className='logo'>
                <Link to="/"><img src={BookHubLogo} /></Link>
            </div>
            <h1 className='slogan'>A ROOM WITHOUT BOOKS<br/> IS LIKE A BODY WITHOUT SOUL</h1>
            
        </div>
        <div className='nav-right'>
        <Stack direction='row' spacing={3}>

            <Link to="/register">
                <Button className='navButtons' colorScheme='teal'>Kaydol</Button>
            </Link>
            <Link to="/login">
                <Button className='navButtons' colorScheme='blue'>Giriş Yap</Button>
            </Link>
            <Link to="/contactus">
                <Button className='navButtons' colorScheme='twitter'>İletişim</Button>
            </Link>
        </Stack>
        </div>
    </nav>
  )
}

export default Navbar
