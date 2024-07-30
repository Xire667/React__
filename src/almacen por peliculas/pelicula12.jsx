import React, { useState } from 'react';
import './Pelicula1.css'; // Archivo CSS para estilos

const Pelicula12 = () => {
  const [showInfo, setShowInfo] = useState(true);

  const pelicula = {
    id: 12,
    titulo: 'Ford v Ferrari',
    descripcion:
      'Ford v Ferrari es una película dirigida por James Mangold que cuenta la historia de la batalla entre Ford y Ferrari en la carrera de Le Mans de 1966. La trama sigue al diseñador de automóviles Carroll Shelby y al piloto Ken Miles mientras intentan construir un coche capaz de vencer a Ferrari en la carrera más prestigiosa del mundo.',
    trailerUrl: 'https://www.youtube.com/embed/zyYgDtY2AMY?autoplay=1&controls=1&fs=1&mute=0&modestbranding=1&rel=0', // URL del tráiler actualizada
  };

  const autor = 'James Mangold';
  const fechaEstreno = '15 de noviembre de 2019';

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

export default Pelicula12;
