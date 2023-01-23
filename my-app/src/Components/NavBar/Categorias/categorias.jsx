import React from 'react';
import Secciones from '../Secciones/secciones';

const Categorias = () => {
    return (
    <div className="collapse navbar-collapse " id="navbarColor01">
        <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <a className="nav-link" href="#">
                Inicio
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                Lanas
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                Colores
                </a>
            </li>
            <Secciones/>
        </ul>
    </div>
    );
}

export default Categorias;
