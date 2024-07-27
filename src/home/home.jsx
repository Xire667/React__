import React, { useState } from 'react';
import "./style_home.css"
const peliculasData = [
    {
        id: 1,
        titulo: 'La Casa de Papel',
        descripcion: 'Ocho atracadores toman rehenes en la Fábrica Nacional de Moneda y Timbre mientras manipulan a la policía para llevar a cabo un ambicioso plan.',
        autor: 'Álex Pina',
        fechaEstreno: '2017',
        trailerUrl: 'https://www.youtube.com/embed/hMANIarjT50',
        imagenUrl: 'https://fontmeme.com/images/la-casa-de-papel-font-1.jpg' // URL de imagen de ejemplo
    },
    {
        id: 2,
        titulo: 'El Irlandés',
        descripcion: 'Un hombre de la mafia reflexiona sobre los crímenes que cometió durante su vida.',
        autor: 'Martin Scorsese',
        fechaEstreno: '2019',
        trailerUrl: 'https://www.youtube.com/embed/WHXxVmeGQUc',
        imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeoxYkMBsirRTF_P_b4TLbK7DtfalQ-Q219A&s' // URL de imagen de ejemplo
    },
    {
        id: 3,
        titulo: 'Bird Box',
        descripcion: 'Una fuerza misteriosa diezma la población mundial y solo una mujer y sus dos hijos deben esconderse para sobrevivir.',
        autor: 'Susanne Bier',
        fechaEstreno: '2018',
        trailerUrl: 'https://www.youtube.com/embed/o2AsIXSh2xo',
        imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_wVGdclj2y9v3KcmFG8L71jtrzBUoaQjJng&s' // URL de imagen de ejemplo
    },
];

const Home_pelis = () => {
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

    const handleClick = (index) => {
        setCurrentMovieIndex(index);
    };

    const { titulo, descripcion, autor, fechaEstreno, trailerUrl, imagenUrl } = peliculasData[currentMovieIndex];

    return (
        <div style={{
            backgroundColor: '#000',
            margin: 0,
            fontFamily: 'Arial, sans-serif',
            color: '#fff', // Texto en blanco para todo el componente
        }}>
            <div className="navigation">
                <h2 className="logo_home" style={{ color: '#e50914', fontSize: '24px', fontFamily: 'Verdana, sans-serif', cursor: 'pointer' }}>Suiza Flix</h2>
                <ul className="nav_home" style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0 }}>
                    <li className="item_nav" style={{ margin: '0 15px', fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s ease' }}>Inicio</li>
                    <li className="item_nav" style={{ margin: '0 15px', fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s ease' }}>Series TV</li>
                    <li className="item_nav" style={{ margin: '0 15px', fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s ease' }}>Películas</li>
                    <li className="item_nav" style={{ margin: '0 15px', fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s ease' }}>Añadidos Recientemente</li>
                    <li className="item_nav" style={{ margin: '0 15px', fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s ease' }}>Mi lista</li>
                </ul>
                <ul className="icons">
                    <li className="item_nav lupa" style={{ cursor: 'pointer', marginRight: '5px' }} onClick={() => console.log("Buscar")}>
                        <i className="fa fa-search"></i> Buscar
                    </li>
                </ul>
            </div>
            <div className="pelis" style={{
                backgroundImage: `url(${imagenUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 'calc(100vh - 60px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className="pelis_content" style={{
                    textAlign: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '20px',
                    maxWidth: '600px'
                }}>
                    <h1 className="pelis_title" style={{
                        fontSize: '48px',
                        marginBottom: '10px'
                    }}>{titulo}</h1>
                    <p className="pelis_description" style={{
                        fontSize: '18px',
                        marginBottom: '20px'
                    }}>{descripcion}</p>
                    <p className="pelis_author" style={{ fontWeight: 'bold' }}>Autor: {autor}</p>
                    <p className="pelis_fecha" style={{ fontWeight: 'bold' }}>Fecha de Estreno: {fechaEstreno}</p>
                    <a className="play_button" href={trailerUrl} target="_blank" rel="noopener noreferrer" style={{
                        backgroundColor: '#e50914',
                        color: '#fff',
                        padding: '12px 30px',
                        margin: '10px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                        display: 'inline-block'
                    }}>Reproducir Trailer</a>
                </div>
            </div>
            <div className="recomenda" style={{ padding: '20px' }}>
                <h2>Recomendaciones para ti</h2>
                <div className="recomenda_lista" style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '20px' }}>
                    {peliculasData.map((pelicula, index) => (
                        <img
                            key={pelicula.id}
                            src={pelicula.imagenUrl}
                            alt={pelicula.titulo}
                            onClick={() => handleClick(index)}
                            style={{
                                width: '150px',
                                height: 'auto',
                                cursor: 'pointer',
                                borderRadius: '5px',
                                transition: 'transform 0.3s ease',
                                transform: index === currentMovieIndex ? 'scale(1.1)' : 'scale(1)',
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home_pelis;
