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
import SvgIcon from '@mui/joy/SvgIcon';
import { IoCloudUploadSharp } from "react-icons/io5";
import Categories from './Categories';


const Nav = () => {


  const [showCart, setShowCart] = useState(false);
  const dispatch2 = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCartToggle = () => {
    setShowCart(!showCart);
  };

  const changeValue = (e) => {
    dispatch2(getProduct(e.target.value));
    console.log(e.target.value);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu on mobile
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="bg-gray-900">
        <nav className="container mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                alt="Amazon Logo"
                width="100"
              />
            </a>
          </div>

          <div className="hidden lg:flex flex-col text-white">
            <span>
              Deliver to <strong>Rajat</strong>
            </span>
            <span>Jaipur 302021</span>
          </div>

          <div className="hidden lg:flex items-center mx-auto w-full lg:w-1/2 space-x-2">
            <div className="relative inline-block">
              <button className="bg-gray-800 text-white px-4 py-2 rounded-l-md">
                Electronics
              </button>
              <ul className="absolute hidden text-gray-700 pt-1">
                <li className="bg-gray-200 hover:bg-gray-400 px-4 py-2">
                  <a href="#/action-1">Books</a>
                </li>
                <li className="bg-gray-200 hover:bg-gray-400 px-4 py-2">
                  <a href="#/action-2">Clothes</a>
                </li>
                <li className="bg-gray-200 hover:bg-gray-400 px-4 py-2">
                  <a href="#/action-3">More Categories</a>
                </li>
              </ul>
            </div>

            <input
              onChange={(e) => { changeValue(e); }}
              type="search"
              placeholder="Search Amazon.in"
              className="w-full p-2 border border-gray-300 focus:outline-none text-black"
            />
            <Button
            className='fs-2'
              component="label"
              role={undefined}
              tabIndex={-1}
              variant="outlined"
              color="neutral"
              // startDecorator={
              //   // <SvgIcon sx={{ color: "white" }}>
              //   //   <svg
              //   //     xmlns="http://www.w3.org/2000/svg"
              //   //     fill="none"
              //   //     viewBox="0 0 24 24"
              //   //     strokeWidth={1.5}
              //   //     stroke="currentColor"
              //   //   >
              //   //     <path
              //   //       strokeLinecap="round"
              //   //       strokeLinejoin="round"
              //   //       d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              //   //     />
              //   //   </svg>
              //   // </SvgIcon>
              // }
              sx={{ color: "white", borderColor: "white" }} // Apply white color to text and border
            >
             <IoCloudUploadSharp />
              <VisuallyHiddenInput type="file" />
            </Button>



            <button className="bg-yellow-400 px-4 py-2 rounded-r-md">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={handleMenuToggle}
          >
            <i className="fa fa-bars fa-lg"></i>
          </button>

          <div className="hidden lg:flex items-center space-x-6 text-white">
            <a href="#" className="hidden lg:block">EN</a>
            <a href="#" className="hidden lg:block">
              <span>
                Hello, Rajat
                <br />
                <strong>Account & Lists</strong>
              </span>
            </a>
            {/* <a href="#" className="hidden lg:block">Returns & Orders</a> */}
            <a href="#" className="flex items-center me-3 " onClick={handleCartToggle}>
              {/* <i className="fa-solid fa-cart-shopping fs-4"></i> */}
              <Badge>
                <Typography sx={{ fontSize: 'xl' }}>🛒</Typography>
              </Badge>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-6 text-white">
            {/* <a href="#" className="block text-sm">Sign </a> */}
            <a href="#" onClick={handleOpen} className="block text-sm bg-yellow-500 px-4 py-2 rounded text-black">Sign Up/In </a>
          </div>

        </nav>
        {/* <Button onClick={handleOpen}>Open Child Modal</Button> */}
        <Modal style={{zIndex:"9999"}}
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, }}>
            {/* <h2 id="child-modal-title">Text in a child modal</h2>
              <p id="child-modal-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <Button onClick={handleClose}>Close Child Modal</Button> */}

            <Register />
          </Box>
        </Modal>


        {isMenuOpen && (
          <div className="lg:hidden bg-gray-800 text-white p-4 space-y-4">
            <div className="flex items-center space-x-2">
              <input
                onChange={(e) => { changeValue(e); }}
                type="search"
                placeholder="Search Amazon.in"
                className="w-full p-2 border border-gray-300 focus:outline-none text-black"
              />
              <button className="bg-yellow-400 px-4 py-2 rounded-r-md">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <a href="#" className="block py-2">Deliver to Rajat</a>
            <a href="#" className="block py-2">Account & Lists</a>
            <a href="#" className="block py-2">Returns & Orders</a>
            <a href="#" className="block py-2" onClick={handleCartToggle}>Cart</a>
            <a href="#" className="block py-2">Sign In</a>
            <a href="#" className="block py-2 bg-yellow-500 text-black text-center rounded">Sign Up</a>
          </div>
        )}

        <div
          className={`offcanvas offcanvas-end ${showCart ? 'show' : ''}`}
          tabIndex="-1"
          style={{ display: showCart ? 'block' : 'none' }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Shopping Cart</h5>
            <button
              type="button"
              className="btn-close text-reset"
              aria-label="Close"
              onClick={handleCartToggle}
            ></button>
          </div>
          <div className="offcanvas-body">
            {/* Cart items would go here */}
          </div>
        </div>
      </div>
      <Categories/>
    </>
  );
};

export default Nav;
