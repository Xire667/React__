import React, { useState } from 'react';
import './Pelicula1.css'; // Archivo CSS para estilos

const Pelicula19 = () => {
  const [showInfo, setShowInfo] = useState(true);

  const pelicula = {
    id: 19,
    titulo: 'Midway',
    descripcion:
      'Midway es una película bélica dirigida por Roland Emmerich. La trama se centra en la Batalla de Midway durante la Segunda Guerra Mundial y sigue a los héroes que participaron en la crucial batalla. La película explora el coraje y la estrategia detrás de uno de los enfrentamientos más importantes del conflicto.',
    trailerUrl: 'https://www.youtube.com/embed/BfTYY_pac8o?autoplay=1&controls=1&fs=1&mute=0&modestbranding=1&rel=0', // URL del tráiler actualizada
  };

  const autor = 'Roland Emmerich';
  const fechaEstreno = '8 de noviembre de 2019';

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

export default Pelicula19;
