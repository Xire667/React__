import React, { useState } from 'react';
import './Pelicula1.css'; // Archivo CSS para estilos

const Pelicula15 = () => {
  const [showInfo, setShowInfo] = useState(true);

  const pelicula = {
    id: 15,
    titulo: 'A Beautiful Day in the Neighborhood',
    descripcion:
      'A Beautiful Day in the Neighborhood es una película biográfica dirigida por Marielle Heller. La historia sigue al periodista Lloyd Vogel mientras escribe un perfil sobre Fred Rogers, el querido presentador de televisión. La película explora temas de bondad, empatía y la influencia positiva de Rogers en la vida de las personas.',
    trailerUrl: 'https://www.youtube.com/embed/-VLEPhfEN2M?autoplay=1&controls=1&fs=1&mute=0&modestbranding=1&rel=0', // URL del tráiler actualizada
  };

  const autor = 'Marielle Heller';
  const fechaEstreno = '22 de noviembre de 2019';

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

export default Pelicula15;
