import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Flip, ToastContainer } from 'react-toastify'
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    transition={Flip}
    />
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
