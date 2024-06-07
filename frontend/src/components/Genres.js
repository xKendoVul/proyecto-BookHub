import logo from '../logo.svg';
import { Link } from "react-router-dom";
import images from '../assets/images';
import { useEffect, useState } from "react";
import { getAllGenres } from './api/bookGenre';

function Genres() {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    async function loadGenres() {
      const res = await getAllGenres();
      console.log(res)
      setGenres(res.data);
    }
    loadGenres();
}, []);

    return (
       <section className="container mt-4">
        <h3 className='mb-4'>Generos Populares </h3>
        <div className='row mb-3'>
        {/* popular category section */}
        {genres.map((genre) => (
          <div key={genre.id} className='col-12 col-md-3 mb-2'>
          <div className="card border-black border-5">
            <img src={genre.image} className="card-img-top" alt={genre.gender}/>
            <div className="card-body">
              <h5 className='text-center'><Link className='card-title ' to={`/genre/${genre.gender}/${genre.id}`}>{genre.gender}</Link></h5>
            </div>
          </div>    
        </div>
        ))}
          {/* Product Box */}

        </div>
      {/* end popular category section */}

       </section>
    );
}

export default Genres;