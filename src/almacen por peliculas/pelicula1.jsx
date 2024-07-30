import React, { useState } from 'react';
import './Pelicula1.css'; // Archivo CSS para estilos

const Pelicula1 = () => {
  const [showInfo, setShowInfo] = useState(true);

  const pelicula = {
    id: 1,
    titulo: 'La Casa de Papel',
    descripcion:
      'La Casa de Papel es una serie de televisión española creada por Álex Pina. La trama gira en torno a un asalto a la Fábrica Nacional de Moneda y Timbre, donde un grupo de personas con apodos de ciudades ejecuta un plan perfecto para robar 2.400 millones de euros. La serie fue creada por Álex Pina y se estrenó en España el 2 de mayo de 2017.',
    trailerUrl: 'https://www.youtube.com/embed/hMANIarjT50?autoplay=1&controls=1&fs=1&mute=0&modestbranding=1&rel=0', // Parámetros ajustados
  };

  const autor = 'Álex Pina';
  const fechaEstreno = '2 de mayo de 2017';

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

export default Pelicula1;
