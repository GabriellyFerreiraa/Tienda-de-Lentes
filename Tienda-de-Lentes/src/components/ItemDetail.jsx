import { useContext } from "react";

import { ItemCount } from "./ItemCount";
import { CartContext } from "../context/cartContext";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => addItem(product, quantity);

  return (
    <div>
      <h1 className="text-white">{product.nombre}</h1>
      <img src={product.img} height={300} alt={product.nombre} />
      <p className="text-white">$ {product.precio}</p>
      <ItemCount stock={product.stock} onAdd={onAdd} />
    </div>
  );
};
