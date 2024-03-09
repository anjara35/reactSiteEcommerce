import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CartContext from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartContext>
      <Routes>
        <Route path="/*" element={<App/>}></Route>
      </Routes>
    </CartContext>
  </BrowserRouter>
)
