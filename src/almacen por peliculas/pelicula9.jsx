import React, { useState } from 'react';
import './Pelicula1.css'; // Archivo CSS para estilos

const Pelicula9 = () => {
  const [showInfo, setShowInfo] = useState(true);

  const pelicula = {
    id: 9,
    titulo: 'Spider-Man: Far From Home',
    descripcion:
      'Spider-Man: Far From Home es una película de superhéroes dirigida por Jon Watts. Tras los eventos de Avengers: Endgame, Peter Parker se embarca en un viaje a Europa con sus amigos, solo para enfrentarse a nuevas amenazas que ponen en peligro el continente. La película explora el crecimiento personal de Peter y su papel como el nuevo héroe.',
    trailerUrl: 'https://www.youtube.com/embed/Nt9L1jCKGnE?autoplay=1&controls=1&fs=1&mute=0&modestbranding=1&rel=0', // URL del tráiler actualizada
  };

  const autor = 'Jon Watts';
  const fechaEstreno = '2 de julio de 2019';

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

export default Pelicula9;
