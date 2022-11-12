import './App.css';
import {BrowserRouter as Router, Route, Link, Routes, BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Shared/Navbar/Navbar.js'
import Homepage from './Components/Pages/Homepage/Homepage.js';
import Footer from './Components/Shared/Footer/Footer';
import Book from './Modules/Book/Book';
import Books from './Modules/Book/Books';
import UserLogin from './Components/Pages/UserLogin/UserLogin';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import Register from './Components/Pages/UserRegister/Register';
import { Mail } from './Components/Pages/ResetPassword/Mail';
import Reset from './Components/Pages/ResetPassword/ResetPassword';
import BookClub from './Modules/BookClub/BookClub'
import PageNotFound from './Components/Pages/PageNotFound/PageNotFound';
import BookClubs from './Modules/BookClub/BookClubs'

function App() {


  return (
    
    <BrowserRouter >
    <div class="container-fluid">
  <div class="col-sm-12 col-md-10">


    <Navbar />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/books' element={<Books />} />
        <Route path='/bookclubs' element={<BookClubs />} />
        <Route path='/book/:id' element={<Book />} />
        <Route path='/resetpassword' element={<Mail />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/bookclub/:id' element={<BookClub />} />
        <Route path='*' element={<PageNotFound />} />


      </Routes>
      <Footer />
      </div>
</div>
</BrowserRouter>
  );
}


export default App;
