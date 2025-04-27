import React, { useContext } from 'react';
import "./CartItems.css";
import CartItem from './CartItem';
import { CartContext } from '../../contexts/CartProvider';

const CartItems = () => {
  const {cartList} = useContext(CartContext);
  return (
    <div className='cart-items'>
      {
        cartList.map(product => <CartItem key={product.id} product={product} />)
      }
    </div>
  )
}

export default CartItems