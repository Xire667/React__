import React, { useState } from 'react';
import './Pelicula1.css'; // Archivo CSS para estilos

const Pelicula6 = () => {
  const [showInfo, setShowInfo] = useState(true);

  const pelicula = {
    id: 6,
    titulo: '1917',
    descripcion:
      '1917 es una película bélica dirigida por Sam Mendes, ambientada durante la Primera Guerra Mundial. La historia sigue a dos soldados británicos, Schofield y Blake, que deben entregar un mensaje para salvar a 1.600 soldados de una trampa enemiga. La película es conocida por su innovador enfoque visual que simula un solo plano secuencia continuo, lo que intensifica la experiencia inmersiva.',
    trailerUrl: 'https://www.youtube.com/embed/YrbdN5zaouU?autoplay=1&controls=1&fs=1&mute=0&modestbranding=1&rel=0', // URL del tráiler actualizada
  };

  const autor = 'Sam Mendes';
  const fechaEstreno = '10 de enero de 2020';

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

export default Pelicula6;
