import React, { useState } from 'react';
import './Pelicula1.css'; // Archivo CSS para estilos

const Pelicula7 = () => {
  const [showInfo, setShowInfo] = useState(true);

  const pelicula = {
    id: 7,
    titulo: 'Once Upon a Time in Hollywood',
    descripcion:
      'Once Upon a Time in Hollywood es una película de Quentin Tarantino que explora la vida de un actor y su doble de riesgo en la industria del cine de Hollywood a finales de los años 60, en un contexto de cambios sociales y culturales.',
    trailerUrl: 'https://www.youtube.com/embed/ELeMaP8EPAA?autoplay=1&controls=1&fs=1&mute=0&modestbranding=1&rel=0&showinfo=0', // Parámetros ajustados
  };

  const autor = 'Quentin Tarantino';
  const fechaEstreno = '26 de julio de 2019';

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

export default Pelicula7;
