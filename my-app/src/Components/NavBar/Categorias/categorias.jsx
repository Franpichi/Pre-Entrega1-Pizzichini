import React from 'react';
import { Link } from 'react-router-dom';
import Secciones from '../Secciones/secciones';

const Categorias = () => {
    return (
    <div className="collapse navbar-collapse " id="navbarColor01">
        <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>Inicio</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={"/"}>Lanas</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={"/"}>Contacto</Link>
            </li>
            <Secciones/>
        </ul>
    </div>
    );
}

export default Categorias;
