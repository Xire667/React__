import React, { useState } from 'react';
import './Pelicula1.css'; // Archivo CSS para estilos

const Pelicula18 = () => {
  const [showInfo, setShowInfo] = useState(true);

  const pelicula = {
    id: 18,
    titulo: 'The Lighthouse',
    descripcion:
      'The Lighthouse es un thriller psicológico dirigido por Robert Eggers. La película sigue a dos fareros en una remota isla mientras se enfrentan a la soledad y la locura. La trama explora temas de aislamiento, locura y el poder del mito y la superstición.',
    trailerUrl: 'https://www.youtube.com/embed/Hyag7lR8CPA?autoplay=1&controls=1&fs=1&mute=0&modestbranding=1&rel=0', // URL del tráiler actualizada
  };

  const autor = 'Robert Eggers';
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

export default Pelicula18;
