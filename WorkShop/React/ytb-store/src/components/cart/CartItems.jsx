import React from 'react';
import "./CartItems.css";
import CartItem from './CartItem';

const CartItems = () => {
  return (
    <div className='cart-items'>
        <CartItem /> 
        <CartItem /> 
        <CartItem /> 
        <CartItem /> 
        <CartItem /> 
        <CartItem /> 
    </div>
  )
}

export default CartItems