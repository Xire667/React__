import React, { useState } from 'react';
import './Pelicula1.css'; // Archivo CSS para estilos

const Pelicula11 = () => {
  const [showInfo, setShowInfo] = useState(true);

  const pelicula = {
    id: 11,
    titulo: 'Django Unchained',
    descripcion:
      'Django Unchained es una película dirigida por Quentin Tarantino que sigue la historia de Django, un esclavo liberado que se une a un cazarrecompensas para rescatar a su esposa de un brutal terrateniente. La película combina acción, humor y un estilo visual distintivo, con un elenco que incluye a Jamie Foxx, Christoph Waltz y Leonardo DiCaprio.',
    trailerUrl: 'https://www.youtube.com/embed/_iH0UBYDI4g?autoplay=1&controls=1&fs=1&mute=0&modestbranding=1&rel=0', // URL del tráiler actualizada
  };

  const autor = 'Quentin Tarantino';
  const fechaEstreno = '25 de diciembre de 2012';

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

export default Pelicula11;
