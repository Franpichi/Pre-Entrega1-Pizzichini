import React from 'react';

const Buscador = ({botonBuscar}) => {
    return (
        <>
            <form class="d-flex">
                <input class="form-control me-sm-2" type="search" placeholder="Search" type="search" />
                <button class="btn btn-primary my-2 my-sm-0" type="submit">Buscar</button>
            </form>    
        </>
    );
}

export default Buscador;
