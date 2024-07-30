import React, { useState } from 'react';
import './Pelicula1.css'; // Archivo CSS para estilos

const Pelicula4 = () => {
  const [showInfo, setShowInfo] = useState(true);

  const pelicula = {
    id: 4,
    titulo: 'El Bromas',
    descripcion:
      'El Bromas, conocida como Joker en inglés, es una película dirigida por Todd Phillips. La trama sigue a Arthur Fleck, un hombre con problemas mentales que vive en una ciudad que lo ignora y lo trata mal. A medida que la situación empeora, se transforma en el icónico villano Joker. La película, protagonizada por Joaquin Phoenix, explora temas profundos de salud mental y la sociedad. Estrenada en 2019, recibió aclamación crítica y varios premios.',
    trailerUrl: 'https://www.youtube.com/embed/t433PEQGErc?autoplay=1&controls=1&fs=1&mute=0&modestbranding=1&rel=0', // URL del tráiler de El Bromas (Joker)
  };

  const autor = 'Todd Phillips';
  const fechaEstreno = '4 de octubre de 2019';

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

export default Pelicula4;
