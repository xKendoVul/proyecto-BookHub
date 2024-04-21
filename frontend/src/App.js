import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'

function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#">BookHub</a>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Categorías</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li> */}
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
  <main className='mt-3'>
      <div className='container'>
        <h3 className='mb-4'>Ultimos Libros <a href='#' className='float-end btn btn-dark'> Ver todos los libros <i className="fa-solid fa-arrow-right-long"></i></a></h3>
        <div className='row'>
          {/* Product Box */}
          <div className='col-12 col-md-3 mb-2'>
            <div className="card">
              <img src={logo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className='card-title'>Harry Potter y la Piedra Filosofal</h4>
                <h5 className='card-title'>Autor: J.k Rowling</h5>
                <h6 className="card-title text-muted">Precio: C$ 500.00</h6>   
              </div>
              <div className='card-footer'> 
                <button title='Agregar al carrito' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                <button title='Agregar a la lista' className='btn btn-danger btn-sm ms-1'><i className='fa fa-heart'></i></button>
              </div>
            </div>     
          </div>
      {/* Product Box end */}

      {/* Product Box */}
          <div className='col-12 col-md-3 mb-2'>
            <div className="card">
              <img src={logo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className='card-title'>Harry Potter y el Caliz de Fuego</h4>
                <h5 className='card-title'>Autor: J.k Rowling</h5>
                <h6 className="card-title text-muted">Precio: C$ 500.00</h6>   
              </div>
              <div className='card-footer'> 
                <button title='Agregar al carrito' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                <button title='Agregar a la lista' className='btn btn-danger btn-sm ms-1'><i className='fa fa-heart'></i></button>
              </div>
            </div>     
          </div>
      {/* Product Box end */}

      {/* Product Box */}
      <div className='col-12 col-md-3 mb-2'>
            <div className="card">
              <img src={logo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className='card-title'>Libro Y</h4>
                <h5 className="card-title text-muted">Precio: C$ 500.00</h5>    
          </div>
          <div className='card-footer'> 
            <button title='Agregar al carrito' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
            <button title='Agregar a la lista' className='btn btn-danger btn-sm ms-1'><i className='fa fa-heart'></i></button>
          </div>
        </div>     
      </div>
      {/* Product Box end */}

      {/* Product Box */}
      <div className='col-12 col-md-3 mb-2'>
            <div className="card">
              <img src={logo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className='card-title'>Libro Z</h4>
                <h5 className="card-title text-muted">Precio: C$ 500.00</h5>    
          </div>
          <div className='card-footer'> 
            <button title='Agregar al carrito' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
            <button title='Agregar a la lista' className='btn btn-danger btn-sm ms-1'><i className='fa fa-heart'></i></button>
          </div>
        </div>     
      </div>
      {/* Product Box end */}
    </div>
  </div>
</main >
    </>
  );
}

export default App;
