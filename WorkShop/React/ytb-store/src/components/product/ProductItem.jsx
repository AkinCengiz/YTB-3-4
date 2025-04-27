import React, { useContext } from 'react'
import "./ProductItem.css"
import { CartContext } from '../../contexts/CartProvider'
import Rating from './Rating'

const ProductItem = ({product}) => {
  const {addToCart} = useContext(CartContext)
  return (
    <div className='card'>
        <img src={product.image} alt={product.name} />
        <h3 className='product-title'>{product.name}</h3>
        <p className='product-description'>{product.description}</p>
        <div className="product-info">
            <Rating rating={product.rating}/>
            <span className='product-price'>{product.price} ₺</span>
        </div>
        <button className='add-to-cart' onClick={() => addToCart(product)}>Add To Cart</button>
    </div>
  )
}

export default ProductItem