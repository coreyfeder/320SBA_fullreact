import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"

import './main.css'
import App from './App.jsx'

console.debug("src/main.jsx")
const docroot = document.getElementById("root")
const reactroot = ReactDOM.createRoot(docroot)
reactroot.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
)
