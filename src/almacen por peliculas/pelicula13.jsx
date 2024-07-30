import React, { useState } from 'react';
import './Pelicula1.css'; // Archivo CSS para estilos

const Pelicula13 = () => {
  const [showInfo, setShowInfo] = useState(true);

  const pelicula = {
    id: 13,
    titulo: 'Jumanji: The Next Level',
    descripcion:
      'Jumanji: The Next Level es una película de aventura dirigida por Jake Kasdan. En esta secuela de Jumanji: Welcome to the Jungle, los personajes regresan al juego para salvar a uno de los suyos. La trama presenta nuevas aventuras y desafíos mientras los jugadores enfrentan peligros aún mayores en el mundo de Jumanji.',
    trailerUrl: 'https://www.youtube.com/embed/YOpySpo2Kig?autoplay=1&controls=1&fs=1&mute=0&modestbranding=1&rel=0', // URL del tráiler actualizada
  };

  const autor = 'Jake Kasdan';
  const fechaEstreno = '13 de diciembre de 2019';

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

export default Pelicula13;
