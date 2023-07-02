import './App.css'
import { NavBar } from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
    <NavBar />
    <div>
      <ItemListContainer greeting="¡Hola, bienvenido!" />
    </div>
    </>
  );
};

export default App;




