import { Link, Navigate } from "react-router-dom";
import ExampleBook from './ExampleBook';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Book_info() {
    const [book, setBook] = useState([]);
    const [books, setBooks] = useState([]);
    const {book_slug, book_id} = useParams();
    const url = '/book/'

    const navigate = useNavigate();
    
    useEffect(() => {
        async function loadBooks() {
        const books = await axios.get('http://localhost:8000/api/books/')
        const book = await axios.get('http://localhost:8000/api' + url + book_id)
        console.log(book.data)
        setBook(book.data);
        setBooks(books.data);
        }
        loadBooks();
    }, []);

    return (
      <section className="card container mt-3 " style={{background: 'linear-gradient(to bottom, #AB00EC, #620785)'}}>
                <div className="row mt-3">
                <h3 className='card-title' style={{textAlign: "center", fontFamily: 'Times New Roman, Times, serif', color: '#0E80D9'}} >{book.title}</h3>
                    <div className="card col-3 mb-3">
                        <img src= {book.port} className="card-img-top"/>
                    </div>
                    <div className="col-6">
                        <h3>Sinopsis</h3>
                        <p>Descripción: Nunc tempor felis ac elit sollicitudin sagittis eu vitae lorem. Ut a odio venenatis, eleifend lorem sit amet, rutrum dui. Praesent congue eu nisi eget lacinia. Vestibulum vel maximus elit. In quis malesuada ex. Praesent dignissim vehicula nibh, et iaculis justo faucibus non. Sed id imperdiet neque, a placerat mauris. Fusce dui nisi, placerat et volutpat eu, imperdiet et nisi. Fusce condimentum ornare ipsum vel pulvinar. Praesent iaculis dignissim tellus molestie pharetra..</p>
                        <p className='mt-3'>
                            <button title='Pendiente' className='btn btn-primary ms-1'>
                                <i class="fa-brands fa-font-awesome"></i> Marcar Pendiente
                            </button>
                            <button title='Comprar Ahora' className='btn btn-success ms-1'>
                                <Link to='/comment_book' style={{color:'white'}}><i className='fa-solid fa-comment'></i>  Comentar </Link>
                            </button>
                            <button title='Agregar a la Lista' className='btn btn-danger ms-1'>
                                <i className='fa fa-heart'></i> Me gusta
                            </button>
                        </p>
                        <hr/>
                        <div className='producttag mt-4'>
                            <h5>Generos</h5>
                            <p>
                            {book.genders && book.genders.length > 0 ? (
                                <ul>
                                    {book.genders.map((genre) => (
                                    <Link to={`/genre/${genre.gender}/${genre.id}`} className='badge bg-warning text-white me-1'>{genre.gender}</Link>
                                    ))}
                                </ul>
                                ) : (
                                <p>No genres available</p>
                                )}
                            </p>
                            {/* <p>
                                {book.genders.map((genre) => (
                                    <Link to='#' className='badge bg-secondary text-white me-1'>{genre.genders}</Link>    
                                ))}
                            </p> */}
                        </div>
                    </div>
                        <div id="carouselExampleInterval" className="carousel slide col-3 mb-3" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <h3>Home</h3>
                                {books.map((book, index) => (
                                    <div className={`carousel-item ${index === 0 ? 'active' : ''} card border-5 border-black`}>
                                        <img src={book.port} className="border-5 d-block h-50 w-100"/>
                                    </div>
                                ))}
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div> 
      </section>
    );
  }
  export default Book_info;