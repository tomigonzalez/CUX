import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import 'tailwindcss/tailwind.css';
import ContextProvider from './components/Context/Context.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider> 
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ContextProvider> 
  </React.StrictMode>,
)
