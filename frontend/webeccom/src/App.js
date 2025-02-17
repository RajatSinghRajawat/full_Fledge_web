import React from 'react'
// import Allpros from './components/seller/AllProducts/Allpros'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './components/seller/OnProducts/Product';
import AllProducts from './components/seller/AllProducts/AllProducts.js';
import Admin from './components/admin/Admin.js';
import Footer from './components/footer/Footer.js';
import Profile from './components/seller/profile/Profile.js';
import Nav from './components/navigation/Nav.js';
import ProductsSearch from './components/seller/OnProducts/ProductsSearch.js';
import Register from './components/seller/register/Login/Register.js';
import ProtextedRoute from './components/utils/ProtextedRoute.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  setTimeout(() => {
    <div className="text-center h-[100vh] w-[100vw] flex items-center justify-center bg-black text-white">
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
        <img
          src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
          alt="Loading"
          className="rounded-full h-28 w-28"
        />
      </div>
    </div>
  }, 2000);
  return (
    <>
    <ToastContainer />
      <div >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllProducts />} />
            <Route element={<ProtextedRoute />}>
              <Route path="/onedata/:userId" element={<Product />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/search/:keyword" element={<ProductsSearch />} />
            </Route >
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} />

          </Routes>

        </BrowserRouter>
        <Footer />

      </div>
    </>

  )
}

export default App




