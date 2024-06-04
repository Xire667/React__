import styleHome from "../styles/style_login.css"
import styleBox from "../styles/style_box.css"
import { Link, useNavigate } from "react-router-dom"
import {BrowserRouter, Route, Routes } from "react-router-dom"

function Login() {

    const naviga = useNavigate();

    const handleClick=()=>{
        naviga("/home")
    }

    return (
        <div>
            <div className="container">
                <div className="nav__">
                    <h1 className="logo__">Suiza Flix</h1>
                    <button className="sesion__">Iniciar Sesion</button>
                </div>
                <div className="fondo__">
                    <div className="overlay__">
                        <div className="content__">
                            <h1>Películas y series ilimitadas y mucho más</h1>
                            <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>
                            <p>Quieres ver Netfilx ya? Ingresa tu email para crear una cuenta o reiniciar tu membresia de Netfilx</p>
                            <div>
                                <input type="email" className="email__" placeholder="Email" />
                                <button onClick={handleClick} className="boton__">Comenzar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box__ caja_1">
                    <div className="sub_box">
                        <h2 className="titulo_caja_1">Disfruta en tu TV</h2>
                        <p className="texto_caja_1">Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</p>
                    </div>
                    <div className="tv_caja_1"></div>
                </div>
                <div className="box__ caja_2">
                    <div className="sub_box_2">
                        <h2 className="titulo_caja_2">Descarga tus series para verlas offline</h2>
                        <p className="texto_caja_2">Guarda tu contenido favorito y tendras siempre algo para ver.</p>
                    </div>
                </div>
                <div className="box__ caja_3">
                    <div className="sub_box_3">
                        <h2 className="titulo_caja_3">Disfruta donde quieras</h2>
                        <p className="texto_caja_3">Pelicualas y series ilimitadas en tu telefono, tablet, laptop y TV.</p>
                    </div>
                </div>
                <div className="box__ caja_4"></div>
                <div className="box__ caja_5"></div>
            </div>
        </div>
    )
}

export default Login