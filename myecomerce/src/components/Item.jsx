import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

export const Item = ({lentes}) => {
    return (
    <Card 
       style={{width: "18rem"}}
       key={lentes.id}
       className="float-start"
    >
        <Card.Img variant="top" src={lentes.img} />
        <Card.Body>
            <Card.Title>{lentes.modelo}</Card.Title>
            <Card.Text>Precio: {lentes.precio}</Card.Text>
            <Link to={`/lentes/${lentes.id}`}>
                <Button varriant="primary">Ver detalle</Button>
            </Link>
        </Card.Body>
       </Card>
    )
}