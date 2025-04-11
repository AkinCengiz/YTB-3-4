import { Routes, Route } from "react-router-dom";
import './App.css'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import NoContent from "./pages/NoContent";
import ProductsPage from "./pages/ProductsPage";
import { useState } from "react";

function App() {
  const [fullName,setFullName] = useState("Akın CENGİZ");
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage fullname={fullName} setFullName = {setFullName}/>} />
      <Route path="*" element={<NoContent/>}/>
    </Routes>
      {/* <HomePage /> */}
      {/* <AboutPage /> */}
      
    </>
  )
}

export default App
