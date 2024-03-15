import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { ProviderContext } from './context/ContextCart'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProviderContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </ProviderContext>
  </BrowserRouter>

)
