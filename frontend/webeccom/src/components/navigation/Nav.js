import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProduct } from '../actions/productActions';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Register from '../seller/register/Login/Register';
import Badge from '@mui/joy/Badge';
import Typography from '@mui/joy/Typography';
import { styled } from '@mui/joy';
import { IoCloudUploadSharp } from "react-icons/io5";
import Categories from './Categories';
import { NavLink } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cart from './Cart';
import logo2 from '../navigation/logo2.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

const Nav = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showCart, setShowCart] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);


  const dispatch2 = useDispatch();

  const handleCartToggle = () => {
    setShowCart(!showCart);
    console.log(setShowCart(!showCart));

  };

  const changeValue = (e) => {
    dispatch2(getProduct(e.target.value));
    console.log("rajawat saab", dispatch2(getProduct(e.target.value)));

    console.log(e.target.value);
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

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const handleLogoutClick = () => {
    setOpenLogoutModal(true);
  };

  const handleCloseLogoutModal = () => {
    setOpenLogoutModal(false);
  };

  const logout = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "email": email,
        "password": password
      });
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch("http://localhost:5000/LogOutUser", requestOptions);

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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="bg-gray-900">
        <nav className="container mx-auto flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <NavLink to='/'>
              <img style={{ width: "80px", height: "60px", marginRight: "10px" }} src={logo2} alt="Logo" />
            </NavLink>
          </div>

          <div className="hidden lg:flex items-center mx-auto w-full lg:w-1/2 space-x-2">
            <div className="relative inline-block">
              <button className="bg-gray-800 text-white px-4 py-2 rounded-l-md">
                Electronics
              </button>
              <ul className="absolute hidden text-gray-700 pt-1">
                <li className="bg-gray-200 hover:bg-gray-400 px-4 py-2"><a href="#/action-1">Books</a></li>
                <li className="bg-gray-200 hover:bg-gray-400 px-4 py-2"><a href="#/action-2">Clothes</a></li>
                <li className="bg-gray-200 hover:bg-gray-400 px-4 py-2"><a href="#/action-3">More Categories</a></li>
              </ul>
            </div>
            <input
              onChange={changeValue}
              type="search"
              placeholder="Search Amazon.in"
              className="w-full p-2 border border-gray-300 focus:outline-none text-black"
            />
            <Button
              component="label"
              variant="outlined"
              sx={{ color: "white", borderColor: "white" }}
            >
              <IoCloudUploadSharp />
              <VisuallyHiddenInput type="file" />
            </Button>
            <button className="bg-yellow-400 px-4 py-2 rounded-r-md">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-6 text-white">
            <a href="#" className="hidden lg:block">EN</a>

            <div className="relative group">
              <a
                href="#"
                className="hidden lg:block cursor-pointer"
              >
                <span>Hello, Rajat<br /><strong className='py-3'>Account & Lists</strong></span>
              </a>

              <div className="absolute hidden group-hover:block bg-white text-gray-700 rounded-md shadow-lg mt-2 w-48 z-40">
                <NavLink to="/profile"> <a href="#profile" className="block px-4 py-2 hover:bg-gray-200">Your Profile</a></NavLink>
                <a href="#orders" className="block px-4 py-2 hover:bg-gray-200">Your Orders</a>
                <a href="#wishlist" className="block px-4 py-2 hover:bg-gray-200">Wishlist</a>
                <a onClick={handleLogoutClick} href="#logout" className="block px-4 py-2 hover:bg-gray-200">Logout</a>
              </div>
            </div>


            {/* //Add to cart */}

            <a onClick={handleCartToggle} href="#cart" className="flex items-center">
              <Badge><Typography sx={{ fontSize: 'xl' }}>🛒</Typography></Badge>
            </a>


            <a href="#" onClick={handleOpen} className="block text-sm bg-yellow-500 px-4 py-2 rounded text-black">Sign Up/In</a>
          </div>
        </nav>

        {/* Modal for Sign In/Sign Up */}
        <div className=' z-10'>
          <Modal
            className='backdrop-blur-md h-screen w-screen'
            style={{ zIndex: "9999" }}
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box
              sx={{
                width: "70%",
                height: "90vh",
                margin: "2rem",
                marginBottom: "1rem",
                ...style,
              }}
            >
              <Register />
            </Box>
          </Modal>
        </div>

        {/* Cart Offcanvas */}
        <Offcanvas style={{ width: "500px" }} show={showCart} onHide={handleCartToggle}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart Items</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Cart />
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      {/* Categories Component */}
      <Categories />


    </>
  );
};

export default Nav;
