import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../contexts/ProductContext'

function Header() {
    const {products,writeConsole} = useContext(ProductContext)
    useEffect(() => {
        products.map(product => <li key={product.id}>Price : {product.price}</li>)
    });
  return (
    <div id='header'>
        <h2>Header</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <ul>
            {
                products.map(product => <li key={product.id}>Price : {product.price} <button onClick={() => writeConsole()}>WRITE</button></li>)
            }
        </ul>
    </div>
  )
}

export default Header