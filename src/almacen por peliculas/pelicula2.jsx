import React, { useState } from 'react';
import './Pelicula1.css'; // Archivo CSS para estilos

const Pelicula2 = () => {
  const [showInfo, setShowInfo] = useState(true);

  const pelicula = {
    id: 2,
    titulo: 'El Irlandés',
    descripcion:
      'El Irlandés es una película dirigida por Martin Scorsese que narra la vida del asesino a sueldo Frank Sheeran. La película explora temas de lealtad y traición en el contexto del crimen organizado en Estados Unidos. Estrenada en 2019, es conocida por su extenso elenco y por el uso de tecnología de rejuvenecimiento digital.',
    trailerUrl: 'https://www.youtube.com/embed/B3cJXk9IaH0?autoplay=1&controls=1&fs=1&mute=0&modestbranding=1&rel=0', // Parámetros ajustados
  };

  const autor = 'Martin Scorsese';
  const fechaEstreno = '27 de noviembre de 2019';

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
      <div className={`pelicula-info ${showInfo ? 'visible' : 'hidden'}`}>
        <h1>{pelicula.titulo}</h1>
        <p>{pelicula.descripcion}</p>
        <div className="autor">Autor: {autor}</div>
        <div className="fecha-estreno">Fecha de estreno: {fechaEstreno}</div>
      </div>
    </div>
  );
};

export default Pelicula2;
