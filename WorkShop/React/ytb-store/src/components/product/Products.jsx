import React from 'react'
import "./Products.css"
import ProductItem from './ProductItem'

const Products = () => {
  return (
    <main className='products-wrapper'>
        <div className='products'>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
    </main>
  )
}

export default Products