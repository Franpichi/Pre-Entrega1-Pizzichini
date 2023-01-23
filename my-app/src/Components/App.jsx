import './App.css';
import CartWidget from './CartWidget/CartWidget';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Buscador from './Buscador/Buscador';

const App = () => {
  return (
      <>
        <NavBar />
        <Buscador/>
        <ItemListContainer bienvenidaLanum={"Bienvenidos a Lanum"}/>
        <ItemListContainer bienvenidaLanum={"La tienda Art-Deco en lanas"}/>
      </>
  );
}

export default App;
