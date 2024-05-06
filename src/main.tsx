import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Register from './Routes/Register.tsx'
import RegisterPage from './Routes/RegisterPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RegisterPage />
  </React.StrictMode>,
)
