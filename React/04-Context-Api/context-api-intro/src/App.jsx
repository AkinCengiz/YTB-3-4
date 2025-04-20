import { useState } from 'react'
import './App.css'
import Content from './components/Content'
import Deneme from './components/Deneme'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  const [deneme,setDeneme] = useState("Deneme");

  return (
    <>
      <h1>Context API</h1>
      <Header />
      <Content  />
      <Footer/>
      <Deneme deneme={deneme} setDeneme={setDeneme} />
    </>
  )
}

export default App
