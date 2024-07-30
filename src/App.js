import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './login/login';
import Home_pelis from './home/home';
import VideoCarousel from './carrusel/VideoCarrusel';
import Añadidos from './home/añadidos';
import Pelicula from './home/peliculas';
import DetallePelicula from './Lista_Pelis/listadepelicula';
import Registro from './registro/registro';
import Pelicula1 from './almacen por peliculas/pelicula1';
import Pelicula2 from './almacen por peliculas/pelicula2';
import Pelicula3 from './almacen por peliculas/pelicula3';
import Pelicula4 from './almacen por peliculas/pelicula4';
import Pelicula5 from './almacen por peliculas/pelicula5';
import Pelicula6 from './almacen por peliculas/pelicula6';
import Pelicula7 from './almacen por peliculas/pelicula7';
import Pelicula8 from './almacen por peliculas/pelicula8';
import Pelicula9 from './almacen por peliculas/pelicula9';
import Pelicula10 from './almacen por peliculas/pelicula10';
import Pelicula11 from './almacen por peliculas/pelicula11';
import Pelicula12 from './almacen por peliculas/pelicula12';
import Pelicula13 from './almacen por peliculas/pelicula13';
import Pelicula14 from './almacen por peliculas/pelicula14';
import Pelicula15 from './almacen por peliculas/pelicula15';
import Pelicula16 from './almacen por peliculas/pelicula16';
import Pelicula17 from './almacen por peliculas/pelicula17';
import Pelicula18 from './almacen por peliculas/pelicula18';
import Pelicula19 from './almacen por peliculas/pelicula19';
import Pelicula20 from './almacen por peliculas/pelicula20';

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
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/pelis/1" element={<Pelicula1 />} />
                    <Route path="/pelis/2" element={<Pelicula2 />} />
                    <Route path="/pelis/3" element={<Pelicula3 />} />
                    <Route path="/pelis/4" element={<Pelicula4 />} />
                    <Route path="/pelis/5" element={<Pelicula5 />} />
                    <Route path="/pelis/6" element={<Pelicula6 />} />
                    <Route path="/pelis/7" element={<Pelicula7 />} />
                    <Route path="/pelis/8" element={<Pelicula8 />} />
                    <Route path="/pelis/9" element={<Pelicula9 />} />
                    <Route path="/pelis/10" element={<Pelicula10 />} />
                    <Route path="/pelis/11" element={<Pelicula11 />} />
                    <Route path="/pelis/12" element={<Pelicula12 />} />
                    <Route path="/pelis/13" element={<Pelicula13 />} />
                    <Route path="/pelis/14" element={<Pelicula14 />} />
                    <Route path="/pelis/15" element={<Pelicula15 />} />
                    <Route path="/pelis/16" element={<Pelicula16 />} />
                    <Route path="/pelis/17" element={<Pelicula17 />} />
                    <Route path="/pelis/18" element={<Pelicula18 />} />
                    <Route path="/pelis/19" element={<Pelicula19 />} />
                    <Route path="/pelis/20" element={<Pelicula20 />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;


/*<Route path="/pelicula/:id" element={<DetallePelicula />} />*/