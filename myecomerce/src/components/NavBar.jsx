
import { CartWidget } from './CartWidget';

import data from '../data/products.json'
import { NavLink } from 'react-router-dom';

const categories = data.map(producto => producto.category)
const unique = new Set(categories)


export const NavBar = () => (
    <header>
        <nav className='mi-lentes'>
            {[...unique].map(item => (
                <NavLink className="nav-link" to={`/category/${item}`}>
                    {item}
                </NavLink>
            ))}
            <h1>Tienda de lentes</h1>
            <ul>
                <li>
                    <a href=".../public/index.html">Home</a>
                    <a href=".../public/producto.html">Productos</a>
                    <a href=".../public/contacto.html">Contacto</a>
                </li>
            </ul>
        </nav>
        <CartWidget />
    </header>
)
