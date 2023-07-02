import './App.css'
import { NavBar } from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
    <NavBar />
    <div>
      <h1>Mi aplicación</h1>
      <ItemListContainer greeting="¡Hola, bienvenido!" />
    </div>
    </>
  );
};

export default App;




