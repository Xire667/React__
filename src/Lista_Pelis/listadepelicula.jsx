import React from 'react';
import { useParams } from 'react-router-dom';

const DetallePelicula = () => {
    const { id } = useParams();

    // Supongamos que obtienes los detalles de la película según el id
    const pelicula = {
        id: id,
        titulo: 'La Casa de Papel',
        descripcion: 'Ocho atracadores toman rehenes en la Fábrica Nacional de Moneda y Timbre mientras manipulan a la policía para llevar a cabo un ambicioso plan.',
        autor: 'Álex Pina',
        fechaEstreno: '2 de mayo de 2017',
        trailerUrl: 'https://www.youtube.com/embed/MmOXI7_suso',
        imagenUrl: 'https://example.com/la_casa_de_papel.jpg'
    };

    const reproducirTrailer = () => {
        // Lógica para reproducir el trailer, por ejemplo abrir en una nueva ventana
        window.open(pelicula.trailerUrl, '_blank');
    };

    return (
        <div className="detalle-pelicula">
            <img src={pelicula.imagenUrl} alt={pelicula.titulo} />
            <h1>{pelicula.titulo}</h1>
            <p><strong>Descripción:</strong> {pelicula.descripcion}</p>
            <p><strong>Autor:</strong> {pelicula.autor}</p>
            <p><strong>Fecha de Estreno:</strong> {pelicula.fechaEstreno}</p>
            <button onClick={reproducirTrailer}>Ver Trailer</button>
        </div>
    );
};

export default DetallePelicula;
