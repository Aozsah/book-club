import './App.css';
import {BrowserRouter as Router, Route, Link, Routes, BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Shared/Navbar/Navbar.js'
import Homepage from './Components/Pages/Homepage/Homepage.js';
import Footer from './Components/Shared/Footer/Footer';
import Book from './Modules/Book/Book';
import Books from './Modules/Book/Books';
import UserLogin from './Components/Pages/UserLogin/UserLogin';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import Popup from './Components/Shared/Pop-up/Pop-up';
import Register from './Components/Pages/UserRegister/Register';
import ResetPassword from './Components/Pages/ResetPassword/ResetPassword';
import { Mail } from './Components/Pages/ResetPassword/Mail';
import Reset from './Components/Pages/ResetPassword/ResetPassword';
import BookClub from './Modules/BookClub/BookClub'

function App() {


  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route exact path='/' element={<Homepage />} />
        <Route path='/Login' element={<UserLogin />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Books' element={<Books />} />
        <Route path='/Book1' element={<Book />} />
        <Route path='/ResetPassword' element={<Mail />} />
        <Route path='/Reset' element={<Reset />} />
        <Route path='/BookClub1' element={<BookClub />} />


      </Routes>
      <Footer />
      
</BrowserRouter>
  );
}


export default App;
