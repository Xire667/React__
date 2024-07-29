import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../styles/style_login.css";

function Accordion({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-question" onClick={() => setIsOpen(!isOpen)}>
                {question}
                <span>{isOpen ? '×' : '+'}</span>
            </div>
            {isOpen && <div className="accordion-answer">{answer}</div>}
        </div>
    );
}

function Login() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/home");
    }

    const faqs = [
        { question: "¿Qué es Suiza-Flix?", answer: "Suiza-Flix es un servicio de streaming que ofrece una gran variedad de películas, series, anime, documentales y mucho más." },
        { question: "¿Cuánto cuesta Suiza-Flix?", answer: "El costo de Suiza-Flix depende del plan que elijas. Tenemos planes básicos, estándar y premium." },
        { question: "¿Dónde puedo ver?", answer: "Puedes ver Suiza-Flix en una variedad de dispositivos, incluyendo tu TV, computadora, tablet y teléfono móvil." },
        { question: "¿Cómo cancelo?", answer: "Puedes cancelar tu suscripción a Suiza-Flix en cualquier momento a través de tu cuenta en nuestro sitio web." },
        { question: "¿Qué puedo ver en Suiza-Flix?", answer: "Suiza-Flix ofrece una amplia variedad de contenido para todos los gustos, incluyendo películas, series, documentales y más." },
        { question: "¿Suiza-Flix es bueno para los niños?", answer: "Sí, Suiza-Flix tiene un modo para niños con contenido adecuado para ellos." }
    ];

    return (
        <div className="contenedor">
            <div className="netflix-clone">
                <header className="header">
                    <h1 className="logo">Suiza Flix</h1>
                    <button className="boton-iniciar">Iniciar Sesión</button>
                </header>

                <main>
                    <section className="caja-1">
                        <div className="contenido-caja-1">
                            <h1>Películas y series ilimitadas y mucho más</h1>
                            <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>
                            <p>¿Quieres ver Suiza-Flix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Suiza-Flix</p>
                            <div className="email-div">
                                <input type="email" placeholder="Email" />
                                <button onClick={handleClick}>Comenzar</button>
                            </div>
                        </div>
                    </section>

                    <section className="cajas-general">
                        <div className="cajas">
                            <div className="feature-text">
                                <h2>Disfruta en tu TV</h2>
                                <p>Míralo en Smart TV, Playstation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</p>
                            </div>
                            <div className="feature-media">
                                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="TV" />
                                <video autoPlay playsInline muted loop>
                                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
                                </video>
                            </div>
                        </div>

                        <div className="cajas">
                            <div className="feature-text">
                                <h2>Descarga tus series para verlas offline</h2>
                                <p>Guarda tu contenido favorito y tendrás siempre algo para ver.</p>
                            </div>
                            <div className="feature-media">
                                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="Mobile" />
                            </div>
                        </div>

                        <div className="cajas">
                            <div className="feature-text">
                                <h2>Disfruta donde quieras</h2>
                                <p>Películas y series ilimitadas en tu teléfono, tablet, laptop y TV.</p>
                            </div>
                            <div className="feature-media">
                                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="Devices" />
                            </div>
                        </div>

                        <div className="cajas">
                            <div className="feature-text">
                                <h2>Crea perfiles para niños</h2>
                                <p>Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía.</p>
                            </div>
                            <div className="feature-media">
                                <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420" alt="Kids" />
                            </div>
                        </div>
                    </section>

                    <section className="faq">
                        <h2>Preguntas frecuentes</h2>
                        <div className="accordion">
                            {faqs.map((faq, index) => (
                                <Accordion key={index} question={faq.question} answer={faq.answer} />
                            ))}
                        </div>
                        <p>¿Listo para ver? Ingresa tu email para crear o reiniciar tu membresía.</p>
                        <div className="email-div">
                            <input type="email" placeholder="Email" />
                            <button onClick={handleClick}>Comenzar</button>
                        </div>
                    </section>
                </main>

                <div className='pies_de'>
                    <footer>
                        <p>¿Preguntas? Llama al 1-800-SUIZA-FLIX</p>
                        <div className="links-abajo">
                            <a href="#">Preguntas frecuentes</a>
                            <a href="#">Centro de ayuda</a>
                            <a href="#">Cuenta</a>
                            <a href="#">Prensa</a>
                            <a href="#">Relaciones con inversionistas</a>
                            <a href="#">Empleo</a>
                            <a href="#">Formas de ver</a>
                            <a href="#">Términos de uso</a>
                            <a href="#">Privacidad</a>
                            <a href="#">Preferencias de cookies</a>
                            <a href="#">Información corporativa</a>
                            <a href="#">Contáctanos</a>
                        </div>
                        <p>Suiza-Flix</p>
                    </footer>
                </div>
            </div>
        </div>        
    );
}

export default Login;