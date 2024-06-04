import React from "react";
import Login from "./login/login"
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Home_pelis from "./home/home";
import VideoCarousel from "./carrusel/VideoCarrusel";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/home" element={<Home_pelis></Home_pelis>}/>
          <Route path="/" element={<Login></Login>}/>
          <Route path="/video" element={<VideoCarousel/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
