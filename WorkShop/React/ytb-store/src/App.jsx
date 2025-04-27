import { useContext } from 'react'
import Cart from './components/cart/Cart'
import Header from './components/layout/Header'
import Products from './components/product/Products'
import Slider from './components/slider/Slider'
import { CartContext } from './contexts/CartProvider'
import './App.css'

function App() {
  const {cartIsShow} = useContext(CartContext);

  return (
    <>
    {
      // cartIsShow ? <Cart /> : ""
      cartIsShow && <Cart />
    }
     <Header />
     <Slider />
     <Products />
    </>
  )
}

export default App
