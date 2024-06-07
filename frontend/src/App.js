import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'

// import Header from './components/header';
import HeaderTest from './components/HeaderTest';
import Footer from './components/Footer';
import Home from './components/home';
import GeneralBooks from './components/GeneralBooks';
import Genres from './components/Genres';
import Books_genres from './components/Books_genres';
import Book_info from './components/Book_info';

import Comment from './components/Comment';

import Register from './components/customer/Register';
import Login from './components/customer/Login';

function App() {
  return (
    <>
    <div style={{background: 'radial-gradient(circle, #062352, #065AE3)'}}>
      <HeaderTest/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/libros_general' element={<GeneralBooks/>}/>
          <Route path='/genres' element={<Genres/>}/>
          <Route path='/genre/:genre_slug/:genre_id' element={<Books_genres/>} />
          <Route path='/book/:book_slug/:book_id' element={<Book_info/>} />
          <Route path='/comment_book' element={<Comment/>} />
          <Route path='/customer/register/' element={<Register/>} />
          <Route path='/customer/login/' element={<Login/>} />
        </Routes>
        <Footer/>
    </div>
      
    </>
  );
}

export default App;
