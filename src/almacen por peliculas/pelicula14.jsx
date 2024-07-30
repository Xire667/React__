import React, { useState } from 'react';
import './Pelicula1.css'; // Archivo CSS para estilos

const Pelicula14 = () => {
  const [showInfo, setShowInfo] = useState(true);

  const pelicula = {
    id: 14,
    titulo: 'Toy Story 4',
    descripcion:
      'Toy Story 4 es una película animada de aventuras y comedia dirigida por Josh Cooley. La trama sigue a Woody, Buzz Lightyear y el resto de los juguetes mientras ayudan a su nueva amiga, Forky, a encontrar su lugar en el mundo. La película explora temas de amistad, identidad y el valor de las relaciones duraderas.',
    trailerUrl: 'https://www.youtube.com/embed/PAJ-7S__w7w?autoplay=1&controls=1&fs=1&mute=0&modestbranding=1&rel=0', // URL del tráiler actualizada
  };

  const autor = 'Josh Cooley';
  const fechaEstreno = '21 de junio de 2019';

  return (
    <div className="pelicula-container">
      <div
        className="pelicula-background"
        onMouseEnter={() => setShowInfo(false)}
        onMouseLeave={() => setShowInfo(true)}
      >
        <iframe
          src={pelicula.trailerUrl}
          title={`Trailer ${pelicula.titulo}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {showInfo && (
        <div className="pelicula-info">
          <h1>{pelicula.titulo}</h1>
          <p>{pelicula.descripcion}</p>
          <div className="autor">Autor: {autor}</div>
          <div className="fecha-estreno">Fecha de estreno: {fechaEstreno}</div>
        </div>
      )}
    </div>
  );
};

export default Pelicula14;
