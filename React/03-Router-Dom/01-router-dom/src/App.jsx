import { Routes, Route } from "react-router-dom";
import './App.css'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import NoContent from "./pages/NoContent";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NoContent/>}/>
    </Routes>
      {/* <HomePage /> */}
      {/* <AboutPage /> */}
      
    </>
  )
}

export default App
