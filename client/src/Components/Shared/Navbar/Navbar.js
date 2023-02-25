import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack } from '@chakra-ui/react';
import BookHubLogo from '..//..//..//assets/images/BookHubLogo.png';

function Navbar({ isLoggedIn }) {
  return (
    <nav className='nav'>
      <div className='nav-left'>
        <div className='logo'>
          <Link to='/'>
            <img src={BookHubLogo} alt='' />
          </Link>
        </div>
      </div>
      <div className='nav-right'>
        <Stack direction='row' spacing={3}>
          {isLoggedIn ? (
            <>
              <Link to='/bookclubs'>
                <Button className='navButtons' colorScheme='teal'>
                  Kitap Kulüpleri
                </Button>
              </Link>
              <Link to='/books'>
                <Button className='navButtons' colorScheme='blue'>
                  Kitaplar
                </Button>
              </Link>
            </>
          ) : (
            <>
             
              <Link to='/books'>
                <Button className='navButtons' colorScheme='blue'>
                  Kitaplar
                </Button>
              </Link>
              <Link to='/bookclubs'>
                <Button className='navButtons' colorScheme='teal'>
                  Kitap Kulüpleri
                </Button>
              </Link>
              <Link to='/register'>
                <Button className='navButtons' colorScheme='teal'>
                  Kaydol
                </Button>
              </Link>
              <Link to='/login'>
                <Button className='navButtons' colorScheme='blue'>
                  Giriş Yap
                </Button>
              </Link>
            </>
          )}
          <Link to='/contactus'>
            <Button className='navButtons' colorScheme='twitter'>
              İletişim
            </Button>
          </Link>
          <Link to='/profile'>
            <Button className='navButtons' colorScheme='twitter'>
              Profil
            </Button>
          </Link>
        </Stack>
      </div>
    </nav>
  );
}

export default Navbar;
