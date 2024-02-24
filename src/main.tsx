import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './fonts.css'
import './vars.css'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
