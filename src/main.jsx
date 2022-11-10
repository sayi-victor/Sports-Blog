import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
window.React = React // This fixes the react is nt defined error

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
