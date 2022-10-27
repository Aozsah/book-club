import './App.css';
import {BrowserRouter as Router, Route, Link, Routes, BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Shared/Navbar/Navbar.js'
import Homepage from './Components/Pages/Homepage/Homepage.js';
import Footer from './Components/Shared/Footer/Footer';
import Books from './Modules/Books';
import Book from './Modules/Book';
import UserLogin from './Components/Pages/UserLogin/UserLogin';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import Register from './Components/Pages/UserRegister/Register';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/Login' element={<UserLogin />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/ContactUs' element={<ContactUs />} />
      </Routes>
</BrowserRouter>
  );
}


export default App;
