import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartIsShow, setCartIsShow] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [cartList]);

  const showCartHandle = () => {
    setCartIsShow(true);
  };

  const hideCartHandle = (e) => {
    e.preventDefault();
    setCartIsShow(false);
  };

  const addToCart = (product) => {
    const isThereProduct = cartList.find((item) => item.id === product.id);
    if (isThereProduct) {
      const updatedList = cartList.map((item) =>
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      );
      setCartList(updatedList);
    } else {
      setCartList([...cartList, { ...product, amount: 1 }]);
    }
  };

  /**
   * product = {
   * id : 1,
        name : "Laptop",
        description : "Dizüstü oyun bilgisayarı",
        price : 19500,
        stock : 8,
        rating : 5,
        image : "/assets/images/products/laptop.png"
   * }
   * 
   * cartItem{
   * id : 1,
        name : "Laptop",
        description : "Dizüstü oyun bilgisayarı",
        price : 19500,
        stock : 8,
        rating : 5,
        image : "/assets/images/products/laptop.png",
        amount : 1
   * }
   * 
   */

  const calculateTotal = () => {
    const total = cartList.reduce((accumulator, current) => {
      return accumulator + current.price * current.amount;
    }, 0);
    setCartTotalPrice(total);
  };

  const removeProductFromCart = (product) => {
    const removeAfterCartList = cartList.filter(item => item.id !== product.id);
    setCartList(removeAfterCartList)
  }

  const clearCartList = () => {
    setCartList([]);
  }

  const values = {
    cartIsShow,
    cartList,
    cartTotalPrice,
    setCartIsShow,
    showCartHandle,
    hideCartHandle,
    addToCart,
    clearCartList,
    removeProductFromCart
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export { CartProvider, CartContext };
