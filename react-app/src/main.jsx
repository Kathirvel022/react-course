import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '/home/kathirvel22/Documents/react-course/react-app/src/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
 
  </StrictMode>,
)
