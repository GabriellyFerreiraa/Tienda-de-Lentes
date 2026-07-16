import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import { CartProvider } from "./context/cartContext";
import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { Cart } from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Productos" />}
          />
          <Route
            path="/category/:id"
            element={<ItemListContainer greeting="Productos" />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/color/:color" element={<ColorItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

function ColorItemListContainer() {
  const { color } = useParams();

  return (
    <ItemListContainer
      greeting={`Productos - Color: ${color}`}
      colorFilter={color}
    />
  );
}
