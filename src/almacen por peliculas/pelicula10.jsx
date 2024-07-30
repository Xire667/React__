import React, { useState } from 'react';
import './Pelicula1.css'; // Archivo CSS para estilos

const Pelicula10 = () => {
  const [showInfo, setShowInfo] = useState(true);

  const pelicula = {
    id: 10,
    titulo: 'Knives Out',
    descripcion:
      'Knives Out es una película de misterio dirigida por Rian Johnson. La trama gira en torno a la muerte del patriarca de una familia adinerada y el posterior enredo de una intrincada investigación de asesinato. La película presenta un elenco estelar y ofrece una vuelta de tuerca moderna al género de los “whodunit” (quien lo hizo).',
    trailerUrl: 'https://www.youtube.com/embed/gj5ibYSz8C0?autoplay=1&controls=1&fs=1&mute=0&modestbranding=1&rel=0', // URL del tráiler actualizada
  };

  const autor = 'Rian Johnson';
  const fechaEstreno = '27 de noviembre de 2019';

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

export default Pelicula10;
