import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./registro_css.css";

function Registro() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email,
            password,
            rememberMe,
        };

        // Guarda los datos en localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        console.log("Iniciar sesión con:", userData);
        navigate("/home");
    };

    const handleSignUp = () => {
        navigate("/registro");
    };

    return (
        <div className="login-container">
            <header className="login-header">
                <h1 className="netflix_logo">Suiza-Flix</h1>
            </header>
            <main className="login-main">
                <form onSubmit={handleSubmit} className="login-form">
                    <h1>Inicia sesión</h1>
                    <input
                        type="text"
                        placeholder="Email o número de celular"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="login-button">Iniciar sesión</button>
                    <div className="login-help">
                        <label>
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            Recuérdame
                        </label>
                        <a href="/help">¿Necesitas ayuda?</a>
                    </div>
                    <div className="signup-now">
                        ¿Primera vez en Suiza-Flix? <span onClick={handleSignUp}>Suscríbete ahora</span>
                    </div>
                    <p className="login-description">
                        Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot. 
                        <a href="/learn-more">Más info.</a>
                    </p>
                </form>
            </main>
            <div className="pies_abajo">
                <footer className="login-footer">
                    <div className="footer-content">
                        <p>¿Preguntas? Llama al 0-800-52352</p>
                        <ul className="footer-links">
                            <li><a href="#">Preguntas frecuentes</a></li>
                            <li><a href="#">Centro de ayuda</a></li>
                            <li><a href="#">Términos de uso</a></li>
                            <li><a href="#">Privacidad</a></li>
                            <li><a href="#">Preferencias de cookies</a></li>
                            <li><a href="#">Información corporativa</a></li>
                        </ul>
                        <div className="language-selector">
                            <select>
                                <option value="es">Español</option>
                                <option value="en">English</option>
                            </select>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Registro;
