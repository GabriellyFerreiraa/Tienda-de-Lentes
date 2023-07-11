import Container from "react-bootstrap/esm/Container";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {CartWidget} from './CartWidget'
import { NavLink } from "react-router-dom";

import data from '../data/products.json'

const categories = data.map(producto => producto.category)
const unique = new Set(categories)


export const NavBar = () => (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand>Tienda de Lentes</Navbar.Brand>
            <Nav className="mi-lente">
            {[...unique].map(item => (
                <NavLink className="nav-link" to={`/category/${item}`}>
                    {item}
                </NavLink>
            ))}
            </Nav>
            <CartWidget />
        </Container>
    </Navbar>
)