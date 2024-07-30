import React, { useState } from 'react';
import './Pelicula1.css'; // Archivo CSS para estilos

const Pelicula20 = () => {
  const [showInfo, setShowInfo] = useState(true);

  const pelicula = {
    id: 20,
    titulo: 'Maleficent: Mistress of Evil',
    descripcion:
      'Maleficent: Mistress of Evil es una película de fantasía dirigida por Joachim Rønning. La trama sigue a Maleficent mientras enfrenta nuevas amenazas para el reino de los hados. La película explora el tema de la familia, la lealtad y el conflicto entre el bien y el mal.',
    trailerUrl: 'https://www.youtube.com/embed/n0OFH4xpPr4?autoplay=1&controls=1&fs=1&mute=0&modestbranding=1&rel=0', // URL del tráiler actualizada
  };

  const autor = 'Joachim Rønning';
  const fechaEstreno = '18 de octubre de 2019';

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

export default Pelicula20;
