import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style_home.css';

const peliculasData = [
  {
    id: 1,
    titulo: 'La Casa de Papel',
    imagenUrl:
      'https://fontmeme.com/images/la-casa-de-papel-font-1.jpg',
  },
  {
    id: 2,
    titulo: 'El Irlandés',
    imagenUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeoxYkMBsirRTF_P_b4TLbK7DtfalQ-Q219A&s',
  },
  {
    id: 3,
    titulo: 'Bird Box',
    imagenUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_wVGdclj2y9v3KcmFG8L71jtrzBUoaQjJng&s',
  },
];

const Añadidos = () => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = (index) => {
    setCurrentMovieIndex(index);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentMovieIndex(0); // Resetear el índice al buscar para mostrar la primera coincidencia
  };

  const filteredMovies = peliculasData.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container_home">
      <div className="navigation">
        <h2 className="logo_home">Suiza Flix</h2>
        <ul className="nav_home">
          <li><Link to="/home">Inicio</Link></li>
          <li><Link to="/pelis">Películas</Link></li>
          <li><Link to="/añadidos">Añadidos Recientemente</Link></li>
        </ul>
        <div className="search_box">
          <i className="fa fa-search"></i>
          <input
            type="text"
            placeholder="Buscar película..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div>
        {filteredMovies.length > 0 ? (
          <></>
        ) : (
          <div className="no_results_message">
            {searchTerm ? `La película que busca no está disponible o no existe.` : 'Escribe algo para buscar películas'}
          </div>
        )}
      </div>
      <div className="recomenda">
        <h2>Añadidos Recientemente</h2>
        <div className="recomenda_lista">
          {filteredMovies.map((pelicula, index) => (
            <img
              key={pelicula.id}
              src={pelicula.imagenUrl}
              alt={pelicula.titulo}
              onClick={() => handleClick(index)}
              className={index === currentMovieIndex ? 'active' : ''}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Añadidos;