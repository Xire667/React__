import React, { useState } from 'react';
import './Pelicula1.css'; // Archivo CSS para estilos

const Pelicula5 = () => {
  const [showInfo, setShowInfo] = useState(true);

  const pelicula = {
    id: 5,
    titulo: 'Parasite',
    descripcion:
      'Parasite es una película surcoreana dirigida por Bong Joon-ho que mezcla drama, comedia y thriller. La historia sigue a la familia Kim, que se infiltra en la vida de una familia adinerada, los Park, haciéndose pasar por empleados. La película explora temas de clase social y desigualdad, y ganó el premio Óscar a la Mejor Película en 2020.',
    trailerUrl: 'https://www.youtube.com/embed/9kLlmWPilSE?autoplay=1&controls=1&fs=1&mute=0&modestbranding=1&rel=0', // URL del tráiler actualizada
  };

  const autor = 'Bong Joon-ho';
  const fechaEstreno = '30 de mayo de 2019';

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

export default Pelicula5;
