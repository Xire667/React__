import React, { useState } from 'react';
import './Pelicula1.css'; // Archivo CSS para estilos

const Pelicula17 = () => {
  const [showInfo, setShowInfo] = useState(true);

  const pelicula = {
    id: 17,
    titulo: 'Jojo Rabbit',
    descripcion:
      'Jojo Rabbit es una comedia dramática dirigida por Taika Waititi. La película sigue a un joven niño en la Alemania nazi que descubre que su madre está escondiendo a una joven judía en su casa. La trama explora temas de odio, amistad y la influencia de la propaganda, todo con un toque satírico.',
    trailerUrl: 'https://www.youtube.com/embed/hcFcMsxxsXg?autoplay=1&controls=1&fs=1&mute=0&modestbranding=1&rel=0', // URL del tráiler actualizada
  };

  const autor = 'Taika Waititi';
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

export default Pelicula17;
