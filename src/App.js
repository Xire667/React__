import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'; // Importa Link para la navegación
import Login from './login/login';
import Home_pelis from './home/home';
import VideoCarousel from './carrusel/VideoCarrusel';
import Añadidos from './home/añadidos';
import Pelicula from './home/peliculas';
import DetallePelicula from './Lista_Pelis/listadepelicula';

function App() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul className="nav_home">
                        <li><Link to="/home"></Link></li>
                        <li><Link to="/pelis"></Link></li>
                        <li><Link to="/añadidos"></Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/home" element={<Home_pelis />} />
                    <Route path="/pelis" element={<Pelicula />} /> 
                    <Route path="/video" element={<VideoCarousel />} />
                    <Route path="/añadidos" element={<Añadidos />} />
                    <Route path="/" element={<Login />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;


/*<Route path="/pelicula/:id" element={<DetallePelicula />} />*/