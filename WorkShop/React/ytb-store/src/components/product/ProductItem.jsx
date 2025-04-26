import React from 'react'
import "./ProductItem.css"

const ProductItem = () => {
  return (
    <div className='card'>
        <img src="/assets/images/products/laptop.png" alt="Laptop" />
        <h3 className='product-title'>Laptop</h3>
        <p className='product-description'>Laptop detay bilgileri</p>
        <div className="product-info">
            <p>*****</p>
            <span className='product-price'>1500 ₺</span>
        </div>
        <button className='add-to-cart'>Add To Cart</button>
    </div>
  )
}

export default ProductItem