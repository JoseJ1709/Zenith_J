import React from "react";
import "../css/navbar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src="../src/images/logo.png" alt="Logo" className="logo" />
      <div className="nav-links">
        <Link to="/" className="nav-link-inicio">Inicio</Link>
        <Link to="/SobreNosotros" className="nav-link-about">Sobre Nosotros</Link>
        <Link to="/Settings" className="nav-link-config">Configuraciones</Link>
      </div>
      <img src="../src/images/usuario.png" className="user-image" />
    </nav>
  );
};

export default NavBar;
