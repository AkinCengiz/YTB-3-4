import React, { useContext } from 'react'
import "./Cart.css";
import CartItems from './CartItems';
import { CartContext } from '../../contexts/CartProvider';
import Offcanvas from '../general/Offcanvas';

const Cart = () => {
    const {hideCartHandle,cartTotalPrice,clearCartList} = useContext(CartContext);
  return (
    <Offcanvas hideCartHandle={hideCartHandle}>
        <div className="cart-header">
                <h3>Cart's</h3>
                <a href="/" className='cart-close' onClick={hideCartHandle}>X</a>
            </div>
            <CartItems />
            <div className="cart-total">
                <span>Total :</span>
                <span>{cartTotalPrice} ₺</span>
            </div>
            <div className="cart-actions">
                <button className='pay-button'>Pay</button>
                <button className='clear-button' onClick={clearCartList}>Clear</button>
            </div>
    </Offcanvas>
  )
}

export default Cart