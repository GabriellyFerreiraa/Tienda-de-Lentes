import {BrowserRouter , Routes , Route} from 'react-router-dom'
import {ItemListContainer} from './components/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


export default function App (){
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/'
      element={<ItemListContainer greeting="Productos" />}/>
    </Routes>
    <Routes>
      <Route path='/category/:id'
      element={<ItemListContainer greeting="Productos" />}/>
    </Routes>
    <Routes>
      <Route path='/item/:id'
      element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
  );
};






