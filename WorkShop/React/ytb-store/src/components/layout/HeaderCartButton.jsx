import React from "react";
import "./HeaderCartButton.css"

const HeaderCartButton = () => {
  return (
    <button className="button">
      <span className="icon">
        <i class="fa-solid fa-cart-shopping"></i>
      </span>
      <span>Cart</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderCartButton;
