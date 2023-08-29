import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //ScricMode, faz um execução de teste antes de abrir aplicação.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
