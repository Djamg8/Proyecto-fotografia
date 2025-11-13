import React from 'react';
import LoginButton from './LoginButton'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">UN VIAJE VISUAL</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/home">Inicio</a></li>
        <li><a href="/tutorials">Tutoriales</a></li>
        <li><a href="/article">Articulos</a></li>
        <li><LoginButton/></li>
      </ul>
    </nav>
  );
};

export default Navbar;
