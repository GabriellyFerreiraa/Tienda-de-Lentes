import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const styles = {
  card: {
    width: "24rem",
    textAlign: "center",
  },
  imageContainer: {
    overflow: "hidden",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export const Item = ({ item }) => (
  <Card style={styles.card} key={item.id} className="float-start">
    <div style={styles.imageContainer}>
      <Card.Img src={item.img} alt={item.nombre} style={styles.image} />
    </div>
    <Card.Body>
      <Card.Title>{item.nombre}</Card.Title>
      <Card.Text>Categoría: {item.categoria}</Card.Text>
      <Card.Text>{item.color}</Card.Text>
      <Link to={`/item/${item.id}`}>
        <Button variant="dark" style={styles.button}>
          Ver detalle
        </Button>
      </Link>
      <mark style={styles.stock}>Stock: {item.stock}</mark>
    </Card.Body>
  </Card>
);
