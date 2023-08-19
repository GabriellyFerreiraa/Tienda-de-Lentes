import { BrowserRouter, Routes, Route } from "react-router-dom"

import { CartProvider } from "./context/cartContext"
import "./App.css"
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import { ItemListContainer } from "./components/ItemListContainer"
import { NavBar } from "./components/NavBar"
import { Cart } from "./components/Cart"

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route
						path="/"
						element={<ItemListContainer className="text-white" greeting="Productos" />}
					/>
					<Route
						path="/category/:id"
						element={<ItemListContainer className="text-white" greeting="Productos" />}
					/>
					<Route
						path="/item/:id"
						element={<ItemDetailContainer />}
					/>
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</CartProvider>
	)
}

export default App