import React from 'react';

const Secciones = () => {
    return (
        <div className="collapse navbar-collapse container-fluid" id="navbarColor01">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Diseños</a>
     <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Hogar</a>
            <a class="dropdown-item" href="#">Personal</a>
            <a class="dropdown-item" href="#">Recomendados</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Personificalo</a>
          </div>
        </div>
    );
}

export default Secciones;
