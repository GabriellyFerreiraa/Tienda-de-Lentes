import { useState } from "react";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const ItemCount = ({ stock, onAdd, initial }) => {
  const [counter, setCounter] = useState(initial ?? 0);

  const handleIncreaseCount = () => {
    if (stock > counter) setCounter(counter + 1);
  };

  const handleDecreaseCount = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <section className="col-12 col-sm-6 col-md-3 mb-4">
      <div className="d-flex flex-column h-100">
        <div>
          <InputGroup>
            <Button variant="dark" onClick={handleIncreaseCount}>
              +
            </Button>
            <Form.Control value={counter} className="text-center" />
            <Button variant="dark" onClick={handleDecreaseCount}>
              -
            </Button>
          </InputGroup>
          {!!counter && (
            <Button
              variant="dark"
              className="mt-4"
              onClick={() => onAdd(counter)}
            >
              Agregar al carrito
            </Button>
          )}
          {stock > 0 && (
            <Link to="/">
              <Button variant="dark" className="mt-4">
                Seguir comprando
              </Button>
            </Link>
          )}
        </div>
        <div className="mt-auto">
          <div className="mt-4 text-white">
            Stock disponible: {stock - counter}
          </div>
        </div>
      </div>
    </section>
  );
};
