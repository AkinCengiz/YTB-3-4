import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'

function Footer() {
    const {products} = useContext(ProductContext)
  return (
    <div>
        <h2>Footer</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <ul>
            {
                products.map(product => <li key={product.id}>Stok : {product.stock}</li>)
            }
        </ul>
    </div>
  )
}

export default Footer