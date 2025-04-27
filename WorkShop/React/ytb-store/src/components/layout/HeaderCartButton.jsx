import React, { useContext } from "react";
import "./HeaderCartButton.css"
import { CartContext } from "../../contexts/CartProvider";

const HeaderCartButton = () => {

  const {showCartHandle,cartList} = useContext(CartContext);
  const itemAmount = cartList.reduce((acc,crr) => {
    return acc + crr.amount
  },0);

  return (
    <button className="button" onClick={showCartHandle}>
      <span className="icon">
        <i className="fa-solid fa-cart-shopping"></i>
      </span>
      <span>Cart</span>
      <span className="badge">{itemAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
