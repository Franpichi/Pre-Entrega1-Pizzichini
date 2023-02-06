import React from 'react';
import { Link } from 'react-router-dom';

const Secciones = () => {
    return (
        <div className="collapse navbar-collapse container-fluid" id="navbarColor01">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Diseños</a>
     <div className="dropdown-menu">
            <Link className="dropdown-item" to={"/category/1"} >Hogar</Link>
            <Link className="dropdown-item" to={"/category/2"} >Ropa</Link>
            <Link className="dropdown-item" to={"/category/3"} >Mascotas</Link>
            <Link className="dropdown-item" to={"/category/4"} >Regalos</Link>
          </div>
        </div>

    );
}

export default Secciones;
