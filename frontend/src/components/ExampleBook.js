import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';
import axios from 'axios';

export function ExampleBook(props) {
    const navigate = useNavigate();

    const hadleClick = (title,id) => {
        navigate(`/book/${title}/${id}`);
    }

    const reloadPage = () => {
        window.location.reload();
    }
    
    return (
            <div className='col-12 col-md-3 mb-2'>
                <div className="card border-black rounded-4 h-100">
                    <div key={props.book.id}  >
                        <Link onClick={() => {hadleClick(props.book.title, props.book.id); reloadPage()} }><img src={props.book.port} className='card-img-top onMouseEnter rounded-top-4' alt='...'/></Link>
                    </div>
                    <div style={{background: 'linear-gradient(to bottom, #03063E, #010217)'}} className="card-body">
                        <h4 className='card-title text-white'><Link className='text-decoration-none' style={{fontFamily: 'Times New Roman, Times, serif' ,color: '#A4C7C5'}} onClick={() => {hadleClick(props.book.title, props.book.id); reloadPage()} }>{props.book.title}</Link></h4>  
                    </div>
                    <div className='card-footer bg-black'>  
                        <button title='Agregar al carrito' className='btn btn-success btn-sm'><i className="fa-solid fa-comment"></i></button>
                        <button title='Agregar a la lista' className='btn btn-danger btn-sm ms-1'><i className='fa fa-heart'></i></button>
                    </div>
                </div>     
            </div>
    )
}

export default ExampleBook;