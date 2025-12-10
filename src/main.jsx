import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/globals.css'
import { BrowserRouter } from 'react-router-dom'
import { ServicesProvider } from './context/ServicesContext'
import { SearchProvider } from './context/SearchContext'
import { AdminAuthProvider } from "./context/AdminAuthContext";


createRoot(document.getElementById('root')).render(
<React.StrictMode>
<AdminAuthProvider>
<BrowserRouter basename='/'>
<ServicesProvider>
<SearchProvider>
<App />
</SearchProvider>
</ServicesProvider>
</BrowserRouter>
</AdminAuthProvider>
</React.StrictMode>
)