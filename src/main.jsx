import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom" 
import { MainMenu } from './pages/MainMenu/MainMenu.jsx'
import { Favorites } from './pages/Favorites/Favorites.jsx'
import { CartPage } from './pages/CartPage/CartPage.jsx'
import { FindPage } from './pages/FindPage/FindPage.jsx'
import { Layout } from './Layouts/Layout.jsx'
import './index.scss'
import { ProductPage } from './pages/ProductPage/ProductPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainMenu />}/>
          <Route path='Favorites' element={<Favorites />}/>
          <Route path='CartPage' element={<CartPage />}/>
          <Route path='FindPage' element={<FindPage />}/>
          <Route path='Product/:gender/:id' element={<ProductPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
