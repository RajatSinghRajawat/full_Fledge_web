import React from 'react'
// import Allpros from './components/seller/AllProducts/Allpros'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './components/seller/OnProducts/Product';
import AllProducts from './components/seller/AllProducts/AllProducts.js';
import Admin from './components/admin/Admin.js';


const App = () => {
  return (
    <div>

      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllProducts/>} />
          <Route path="/onedata/:userId" element={<Product/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
