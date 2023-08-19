import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

import { ItemList } from "./ItemList";

export const ColorItemListContainer = ({ greeting, colorFilter }) => {
  const [list, setList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refCollection = id
      ? query(
          collection(db, "items"),
          where("categoryId", "==", id),
          where("color", "==", colorFilter)
        )
      : collection(db, "items", where("color", "==", colorFilter));

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
