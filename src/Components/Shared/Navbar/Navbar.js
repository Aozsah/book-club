import  './Navbarstyles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Image} from '@chakra-ui/react'

function Navbar() {
  return (
    <nav className='nav'>
        <div className='nav-left'>
            <div className='logo'>
                <Link to="/home"><Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/200' /></Link>
            </div>
            <h1>A ROOM WITHOUT BOOKS<br/> IS LIKE A BODY WITHOUT SOUL</h1>
            
        </div>
        <div className='nav-right'>
        <Stack direction='row' spacing={4} >

            <Link to="/Register">
                <Button className='navButtons' colorScheme='teal'>Register</Button>
            </Link>
            <Link to="/Login">
                <Button className='navButtons' colorScheme='blue'>Login</Button>
            </Link>
            <Link to="/ContactUs">
                <Button className='navButtons' colorScheme='twitter'>Contact Us</Button>
            </Link>
        </Stack>
        </div>
    </nav>
  )
}

export default Navbar
