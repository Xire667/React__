import React, { useState } from 'react';
import './Pelicula1.css'; // Archivo CSS para estilos

const Pelicula3 = () => {
  const [showInfo, setShowInfo] = useState(true);

  const pelicula = {
    id: 3,
    titulo: 'Bird Box',
    descripcion:
      'Bird Box es una película de terror dirigida por Susanne Bier basada en la novela homónima de Josh Malerman. La trama sigue a una madre y sus dos hijos que deben navegar a través de un bosque y río ciegos para evitar criaturas misteriosas que causan que las personas se suiciden al mirarlas. La película explora temas de supervivencia y maternidad en un entorno post-apocalíptico. Estrenada en 2018, se convirtió en un éxito de Netflix.',
    trailerUrl: 'https://www.youtube.com/embed/UAeZdEQxWt4?autoplay=1&controls=1&fs=1&mute=0&modestbranding=1&rel=0', // URL del tráiler de Bird Box
  };

  const autor = 'Susanne Bier';
  const fechaEstreno = '21 de diciembre de 2018';

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

export default Pelicula3;
