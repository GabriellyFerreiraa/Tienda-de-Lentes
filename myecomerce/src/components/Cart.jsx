import { useState, useContext } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

import { CartContext } from "../context/cartContext";

export const Cart = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { productosAgregados, deleteItem, clear } = useContext(CartContext);

  const sendOrder = () => {
    const order = {
      buyer: formValues,
      items: productosAgregados,
      total: total(),
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then((response) => {
      if (response.id) {
        clear();
        alert("Su orden: " + response.id + " ha sido completada!");
      }
    });
  };

  const handleChange = (ev) => {
    setFormValues((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const total = () =>
    productosAgregados.reduce(
      (acumulador, valorActual) =>
        acumulador + valorActual.quantity * valorActual.precio,
      0
    );

  return (
    <Container className="mt-4">
      <h1 className="text-white">Lista productos</h1>
      {!productosAgregados.length ? (
        <mark>No hay productos</mark>
      ) : (
        <>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Nombre</th>
                <th></th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {productosAgregados.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.nombre}</td>
                  <td>
                    <img height={60} src={producto.img} alt={producto.nombre} />
                  </td>
                  <td>{producto.precio}</td>
                  <td>{producto.quantity}</td>
                  <td>
                    <Button
                      variant="dark"
                      type="button"
                      onClick={() => deleteItem(producto.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td></td>
                <td>{total()}</td>{" "}
                {/* Muestra el total en la columna de "Precio" */}
                <td></td>
                <td></td>
              </tr>
            </tfoot>
          </Table>
          <h2 className="text-white">Ingresar datos de usuario</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white">Nombre:</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formValues.name}
                type="text"
                name="name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white">Email:</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formValues.email}
                type="email"
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">Tel:</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formValues.phone}
                type="text"
                name="phone"
              />
            </Form.Group>
            <Button variant="dark" type="button" onClick={sendOrder}>
              Submit
            </Button>
          </Form>
        </>
      )}
    </Container>
  );
};
