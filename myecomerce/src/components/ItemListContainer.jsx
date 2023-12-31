import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { ItemList } from "./ItemList";

export const ItemListContainer = ({ greeting, colorFilter }) => {
  const [list, setList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    let refCollection = id
      ? query(collection(db, "items"), where("categoryId", "==", id))
      : collection(db, "items");

    if (colorFilter) {
      refCollection = query(refCollection, where("color", "==", colorFilter));
    }

    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) setList([]);
      else {
        setList(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    });
  }, [id, colorFilter]);

  return (
    <Container className="mt-4">
      <h1 className="text-white">{greeting}</h1>
      <ItemList items={list} />
    </Container>
  );
};
