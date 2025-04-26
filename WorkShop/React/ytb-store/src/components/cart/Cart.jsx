import React from 'react'
import "./Cart.css";
import CartItems from './CartItems';

const Cart = () => {
  return (
    <div className='offcanvas'>
        <div className="content">
            <div className="cart-header">
                <h3>Cart's</h3>
                <a href="/" className='cart-close'>X</a>
            </div>
            <CartItems />
            <div className="cart-total">
                <span>Total :</span>
                <span>1500 ₺</span>
            </div>
            <div className="cart-actions">
                <button className='pay-button'>Pay</button>
                <button className='clear-button'>Clear</button>
            </div>
        </div>
    </div>
  )
}

export default Cart