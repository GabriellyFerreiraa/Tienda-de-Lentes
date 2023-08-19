import { Row, Col } from "react-bootstrap";
import { Item } from "./Item";

export const ItemList = ({ items }) => (
  <Row xs={1} sm={2} md={3} gap={16}>
    {items.length ? (
      items.map((item) => (
        <Col key={item.id} className="mb-4">
          <Item item={item} />
        </Col>
      ))
    ) : (
      <span>Cargando...</span>
    )}
  </Row>
);
