import React, { useContext } from 'react';
import "./CartItem.css";
import { CartContext } from '../../contexts/CartProvider';

const CartItem = ({product}) => {
    const {removeProductFromCart} = useContext(CartContext)

    const removeItemHandle = (e) => {
        e.preventDefault();
        removeProductFromCart(product);
    }
  return (
    <div className='cart-item'>
        <div className="cart-item-image">
            <img src={product.image} alt="Laptop" />
        </div>
        <div className="cart-item-info">
            <div className="cart-item-texts">
                <strong>{product.name}</strong>
                <div className="cart-item-total">
                    <span>₺ {product.price} X </span>
                    <span>{product.amount}</span>
                </div>
            </div>
            <a href="/" className='cart-item-remove' onClick={removeItemHandle}>x</a>
        </div>
    </div>
  )
}

export default CartItem