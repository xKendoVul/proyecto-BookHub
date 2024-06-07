import ExampleBook from "./ExampleBook";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from 'axios';

function Books_genres() {
    const {genre_slug, genre_id} = useParams();
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        async function loadBooks() {
            const res = await axios.get('http://localhost:8000/api/books/');
            console.log(res.data);
            setBooks(res.data);
            if (genre_id) {
                setFilteredBooks(res.data.filter(book => 
                    book.genders.some(g => g.gender === genre_slug)));
            }else {
                    setFilteredBooks(res.data);
                }
        // })
        }
        loadBooks();
    }, [genre_slug]);
   
    return (
        <section className="container mt-4">
            <h3 className='mb-4'><span className='text-success'>Libros tipo {genre_slug}</span></h3>
            <div className='row mb-4'>
                {filteredBooks.map((book) => (
                    <ExampleBook book ={book}/>
                ))}
                
            </div>
            <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </a>
                </li>
            </ul>
            </nav>

        </section>
    )
}

export default Books_genres;