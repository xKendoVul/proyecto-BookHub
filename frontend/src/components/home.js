import { Link } from "react-router-dom";
import images from "../assets/images";
import { useEffect, useState } from "react";
import { getAllBooks } from "./api/task.api";
import ExampleBook from "./ExampleBook";

function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function loadBooks() {
      const res = await getAllBooks();
      console.log(res.data)
      setBooks(res.data); 
    }
    loadBooks();
}, []);
  
    return (
    <main className='mt-3'>
      <div className='container'>
        <h3 className='mb-4'>Top Libros de la Semana <Link to='/libros_general'><a href='#' className='float-end btn btn-dark'> Ver todos los libros <i className="fa-solid fa-arrow-right-long"></i></a></Link></h3>
        <div className='row'>
          {/* Product Box */}
          {books.map(book => (
            <ExampleBook key={book.id} book={book}/>
          ))}
        </div>
      </div>
    </main >
    )
}

export default Home