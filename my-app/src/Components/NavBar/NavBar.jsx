import logo from '../logo.svg'
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Categorias from './Categorias/categorias';
import Buscador from '../Buscador/Buscador';

const NavBar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-secundary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} className="App-logo" alt="logo" />
    </a>
        <Categorias/>
        <CartWidget carroCodeado={7}/>

    </div>
</nav>


    );
}

export default NavBar;
