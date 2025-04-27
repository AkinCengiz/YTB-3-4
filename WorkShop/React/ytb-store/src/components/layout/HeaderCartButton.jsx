import React, { useContext } from "react";
import "./HeaderCartButton.css"
import { CartContext } from "../../contexts/CartProvider";

const HeaderCartButton = () => {

  const {showCartHandle} = useContext(CartContext);

  return (
    <button className="button" onClick={showCartHandle}>
      <span className="icon">
        <i class="fa-solid fa-cart-shopping"></i>
      </span>
      <span>Cart</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderCartButton;
