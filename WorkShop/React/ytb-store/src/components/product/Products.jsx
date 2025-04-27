import React, { useContext } from 'react'
import "./Products.css"
import ProductItem from './ProductItem'
import { ProductContext } from '../../contexts/ProductProvider'

const Products = () => {
  const {productList} = useContext(ProductContext);
  return (
    <main className='products-wrapper'>
        <div className='products'>
          {
            productList.map(product => <ProductItem key={product.id} product={product} />)
          }
        </div>
    </main>
  )
}

export default Products