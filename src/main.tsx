import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './fonts.sass'
import './vars.sass'
import './global.sass'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
