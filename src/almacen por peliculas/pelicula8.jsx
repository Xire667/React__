import React, { useState } from 'react';
import './Pelicula1.css'; // Archivo CSS para estilos

const Pelicula8 = () => {
  const [showInfo, setShowInfo] = useState(true);

  const pelicula = {
    id: 8,
    titulo: 'Avengers: Endgame',
    descripcion:
      'Avengers: Endgame es una película de superhéroes dirigida por Anthony y Joe Russo. Es la culminación de la saga del Infinito del Universo Cinematográfico de Marvel, donde los Avengers deben enfrentar al villano Thanos en una batalla final para revertir los efectos del chasquido que borró la mitad de la vida en el universo.',
    trailerUrl: 'https://www.youtube.com/embed/kWdQOjtDAJA?autoplay=1&controls=1&fs=1&mute=0&modestbranding=1&rel=0', // URL del tráiler actualizada
  };

  const autor = 'Anthony y Joe Russo';
  const fechaEstreno = '26 de abril de 2019';

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

export default Pelicula8;
