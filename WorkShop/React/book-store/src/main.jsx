import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Layout from './components/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container">
      <BrowserRouter>
      <Layout>
        <App />
      </Layout>
      </BrowserRouter>
    </div>
  </StrictMode>,
)
