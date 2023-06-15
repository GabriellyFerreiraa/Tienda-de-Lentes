import { NavBar } from "./src/components/NavBar";

const ItemListContainer = props => <div>{props.greeting}</div>

function App() {
	return (
        <NavBar />
	)
}

export default App