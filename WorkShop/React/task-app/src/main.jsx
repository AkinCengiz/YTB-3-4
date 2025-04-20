import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TaskContextProvider } from './contexts/TaskContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskContextProvider>
      <div className="container">
        <App />
      </div>
    </TaskContextProvider>
  </StrictMode>,
)
