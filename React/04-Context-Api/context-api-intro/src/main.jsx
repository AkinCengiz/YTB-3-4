import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductContextProvider } from './contexts/ProductContext.jsx'
import { BookContextProvider } from './contexts/BookContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductContextProvider>
      <BookContextProvider>
        <App />
      </BookContextProvider>
    </ProductContextProvider>
  </StrictMode>,
)
