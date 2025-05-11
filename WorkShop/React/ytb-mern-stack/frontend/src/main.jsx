import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import AdminLayout from './layout/AdminLayout.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AdminLayout>
        <App />
      </AdminLayout>
    </BrowserRouter>
  </StrictMode>,
)
