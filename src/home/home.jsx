import React from 'react';
import styleHome from "../home/style_home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter, Route, Routes } from "react-router-dom"
import { Link, useNavigate } from "react-router-dom"

function Home_pelis() {

    const naviga = useNavigate();

    const handleClick=()=>{
        naviga("/")
    }

    return (
        <div className="container_home">
            <nav className="navigation">
                <div className="nav_izq">
                    <h2 className="logo_home">Suiza Flix</h2>
                    <ul className="nav_home">
                        <li className="item_nav">Inicio</li>
                        <li className="item_nav">Series TV</li>
                        <li className="item_nav">Películas</li>
                        <li className="item_nav">Añadidos Recientemente</li>
                        <li className="item_nav">Mi lista</li>
                    </ul>
                </div>
                <div className="nav_dere">
                    <ul className="icons">
                        <FontAwesomeIcon className="item_nav lupa" icon={faSearch} />
                    </ul>
                    <ul className="generos">
                        <li className="gene">Buscar</li>
                        <li className="gene dvd"></li>
                    </ul>
                </div>
            </nav>
            <div className="pelis">
                <div className="pelis_content">
                    <h1 className="pelis_title">La Casa de Papel</h1>
                    <p className="pelis_description">Ocho atracadores toman rehenes en la Fábrica Nacional de Moneda y Timbre mientras manipulan a la policía para llevar a cabo un ambicioso plan.</p>
                    <button className="play_button">Reproducir</button>
                    <button className="mi_list_button">Mi lista</button>
                </div>
            </div>
            <div className="recomenda">
                <h2>Recomendaciones para ti</h2>
                <div className="recomenda_lista">
                    <img src={require('../images/elite.jpeg')} alt="Élite" />
                    <img src={require('../images/irishman.jpg')} alt="El Irlandés" />
                    <img src={require('../images/irishman.jpg')} alt="El Irlandés" />
                    <img src={require('../images/irishman.jpg')} alt="El Irlandés" />
                    <img src={require('../images/irishman.jpg')} alt="El Irlandés" />
                    
                </div>
            </div>
        </div>
    );
}

export default Home_pelis;

/* <img src='../images/chicas_cable.jpg' alt="Chicas del Cable" />
   <img src='../images/witcher.jpg' alt="The Witcher" />
   <img src='../images/klaus.jpg' alt="Klaus" />
*/