import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../actions/productActions';
import { useNavigate, NavLink } from 'react-router-dom';
import { Box, Modal, Button } from '@mui/material';
import { Badge, Typography, styled } from '@mui/joy';
import { IoCloudUploadSharp } from "react-icons/io5";
import { FaFilter } from 'react-icons/fa';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Categories from './Categories';
import Cart from './Cart';
import Register from '../seller/register/Login/Register';
import logo2 from '../navigation/logo2.png';

const Nav = () => {
  const myRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showCart, setShowCart] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("");
  // const userData = JSON.parse(localStorage.getItem("userData"));
  const handleCartToggle = () => {
    setShowCart(prev => !prev);
    console.log("Cart visibility toggled:", !showCart);
  };
  // const userName = userData?.firstName || "Guest";
  // console.log(userName,"userName");

  const changeValue = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      navigate(`/search/${e.target.value.trim()}`);
    }
  };
  const userData = localStorage.getItem("userData");
  useEffect(() => {
    dispatch(getProduct(""));
  }, [dispatch]);

  useEffect(() => {
    if (myRef.current) {
      myRef.current.addEventListener('keypress', changeValue);
    }
    return () => {
      if (myRef.current) {
        myRef.current.removeEventListener('keypress', changeValue);
      }
    };
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const user = JSON.parse(userData);
      setUserName(user.firstName || "Guest");
    }
  }, []);

  const { value } = useSelector((state) => state.MYproduct);
  const filteredProducts = value?.products?.filter((p) => p.productCategoryName === "shoes");

  const handleLogoutClick = () => setOpenLogoutModal(true);
  const handleCloseLogoutModal = () => setOpenLogoutModal(false);

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:5000/LogOutUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "", password: "" }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Logout Successful:", result);
        alert("Logout Successful!");
      } else {
        console.error("Logout Failed:", response.statusText);
        alert("Logout Failed!");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const VisuallyHiddenInput = styled('input')`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    width: 1px;
  `;

  return (
    <>
      <div className="bg-gray-900">
        <nav className="container mx-auto flex items-center justify-between py-4">
          {/* Logo Section */}
          <NavLink to='/'>
            <img src={logo2} alt="Logo" className="w-20 h-16 mr-2" />
          </NavLink>

          <div className="hidden lg:flex items-center mx-auto w-full lg:w-1/2 space-x-2">
            <select className="form-select w-40" aria-label="Category Select">
              <option defaultValue>Categories</option>
              <option value="Hoodie">Hoodie</option>
              <option value="Shoes">Shoes</option>
              <option value="Three">Three</option>
            </select>

            <input
              ref={myRef}
              placeholder="Search EcomZone.in"
              className="w-full p-2 border border-gray-300 focus:outline-none text-black"
            />

            <Button component="label" variant="outlined" sx={{ color: "white", borderColor: "white" }}>
              <IoCloudUploadSharp />
              <VisuallyHiddenInput type="file" />
            </Button>

            <button className="bg-yellow-400 px-4 py-2 rounded-r-md">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-6 text-white">
            <span className="hidden lg:block">EN</span>

            <div className="relative group">
              <span className="hidden lg:block cursor-pointer">
                Hello, {userName} <br />
                <strong>Account & Lists</strong>
              </span>

              <div className="absolute hidden group-hover:block bg-white text-gray-700 rounded-md shadow-lg mt-2 w-48 z-40">
                <NavLink to="/profile"><span className="block px-4 py-2 hover:bg-gray-200">Your Profile</span></NavLink>
                <span className="block px-4 py-2 hover:bg-gray-200">Your Orders</span>
                <span className="block px-4 py-2 hover:bg-gray-200">Wishlist</span>
                <span onClick={handleLogoutClick} className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Logout</span>
              </div>
            </div>

            {/* Cart Icon */}
            <span onClick={handleCartToggle} className="flex items-center cursor-pointer">
              <Badge><Typography sx={{ fontSize: 'xl' }}>🛒</Typography></Badge>
            </span>

            {/* Sign Up/In Button */}
            {!userData && (
              <span
                onClick={() => navigate('/register')}
                className="block text-sm bg-yellow-500 px-4 py-2 rounded text-black cursor-pointer"
              >
                Sign Up/In
              </span>
            )}

          </div>
        </nav>

        {/* Sign In/Sign Up Modal */}
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="sign-in-modal-title"
          aria-describedby="sign-in-modal-description"
        >
          <Box sx={{ width: "70%", height: "90vh", margin: "2rem auto", ...{ bgcolor: 'background.paper', p: 4 } }}>
            <Register />
          </Box>
        </Modal>

        {/* Cart Offcanvas */}
        <Offcanvas show={showCart} onHide={handleCartToggle} style={{ width: "500px", zIndex: "999999" }}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart Items</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Cart />
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      <Categories />
    </>
  );
};

export default Nav;
