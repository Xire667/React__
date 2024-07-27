import React from 'react';
import { Link } from 'react-router-dom';

const Pelicula = ({ id, titulo, descripcion, autor, fechaEstreno, trailerUrl, imagenUrl }) => {

    const reproducirTrailer = () => {
        // Lógica para reproducir el trailer, por ejemplo abrir en una nueva ventana
        window.open(trailerUrl, '_blank');
    };

    return (
        <div className="pelicula">
            <Link to={`/pelicula/${id}`}>
                <img src={imagenUrl} alt={titulo} />
            </Link>
            <h2>{titulo}</h2>
            <p><strong>Descripción:</strong> {descripcion}</p>
            <p><strong>Autor:</strong> {autor}</p>
            <p><strong>Fecha de Estreno:</strong> {fechaEstreno}</p>
            <button onClick={reproducirTrailer}>Ver Trailer</button>
        </div>
    );
};

export default Pelicula;
