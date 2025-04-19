import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import AuthorListPage from "./pages/AuthorListPage"
import AuthorDetailPage from "./pages/AuthorDetailPage"
import BookDetailPage from "./pages/BookDetailPage"
import BookListPage from "./pages/BookListPage"
import NoContent from "./pages/NoContent"
import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/authors" element={<AuthorListPage />} />
      <Route path="/authordetails" element={<AuthorDetailPage />} />
      <Route path="/books" element={<BookListPage />} />
      <Route path="/bookdetails" element={<BookDetailPage />} /> 
      <Route path="*" element={<NoContent />} /> 
    </Routes>
    </>
  )
}

export default App
