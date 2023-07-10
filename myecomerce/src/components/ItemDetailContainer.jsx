import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'

import data from '../data/products.json'
import {ItemDetail} from '../components/ItemDetail'

export const ItemDetailContainer = (props) => {
  const [product, SetProduct] = useState ([])

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 2000)
    })

    promesa.then(result => {
        SetProduct(result[2])
    })
  }, [])

    return (
      <Container className='mt-4'>
        <h1>Detalle</h1>
        {product.length === 0 ? (
            <div class="typing-indicator">
            <div class="typing-circle"></div>
            <div class="typing-circle"></div>
            <div class="typing-circle"></div>
            <div class="typing-shadow"></div>
            <div class="typing-shadow"></div>
            <div class="typing-shadow"></div>
            </div>
           ):(
            <ItemDetail lentes={product} />
           )} 
      </Container>
    );
  };
