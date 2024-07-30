import React, { useState } from 'react';
import './Pelicula1.css'; // Archivo CSS para estilos

const Pelicula16 = () => {
  const [showInfo, setShowInfo] = useState(true);

  const pelicula = {
    id: 16,
    titulo: 'The Farewell',
    descripcion:
      'The Farewell es una comedia dramática dirigida por Lulu Wang. La película sigue a una familia china-estadounidense que regresa a China bajo el pretexto de una boda para esconder el hecho de que su abuela está enferma de cáncer terminal. La trama explora la cultura, las tradiciones y los desafíos de la familia mientras lidian con la enfermedad y el secreto.',
    trailerUrl: 'https://www.youtube.com/embed/RofpAjqwMa8?autoplay=1&controls=1&fs=1&mute=0&modestbranding=1&rel=0', // URL del tráiler actualizada
  };

  const autor = 'Lulu Wang';
  const fechaEstreno = '12 de julio de 2019';

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

export default Pelicula16;
