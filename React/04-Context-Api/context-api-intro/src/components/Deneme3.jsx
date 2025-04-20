import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'

function Deneme3({deneme}) {
    const {products} = useContext(ProductContext);
  return (
    <>
    <div>{deneme}</div>
    {
        products.map(product => <li key={product.id}>Product Name : {product.name}<br/>Product Price : {product.price}</li>)
    }
    </>
  )
}

export default Deneme3