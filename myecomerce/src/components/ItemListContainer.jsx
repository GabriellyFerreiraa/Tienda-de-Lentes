import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container'

import data from '../data/products.json'
import {ItemList} from '../components/ItemList'

export const ItemListContainer = (props) => {
  const [products, SetProducts] = useState ([])

  const { id } = useParams ()

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 2000)
    })

    promesa.then(result => {
      if(id) {
        SetProducts(
          result.filter(product => product.category === id)
          )
      } else {
        SetProducts(result)
      }
    })
  }, [id])

    return (
      <Container className='mt-4'>
        <h1>HOLA! {props.greeting}</h1>
        {products.length === 0 ? (
           <div>Loading ... </div>
           ):(
            <ItemList products={products} />
           )} 
      </Container>
    );
  };
