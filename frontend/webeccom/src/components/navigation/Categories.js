import React, {  } from 'react'
import { FaBars } from "react-icons/fa"; // Importing the menu icon from React Icons
import { AiOutlineAmazon } from "react-icons/ai"; // Amazon icon as an example
import './nav.css'
const Categories = () => {


  return (
    <div>
      <div className="bg-[#232f3e] text-white px-4 py-2">
        <div className="flex items-center gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700">
          {/* Menu Icon */}
          <FaBars className="text-xl mr-4 cursor-pointer" />

          {/* Navigation Links */}
          <ul className="flex gap-4 text-sm whitespace-nowrap">
            <li><a href="#" className="hover:text-gray-300">All</a></li>
            <li><a href="#" className="hover:text-gray-300">Electronics</a></li>
            <li><a href="#" className="hover:text-gray-300">Keep Shopping for</a></li>
            <li><a href="#" className="hover:text-gray-300">Car & Motorbike</a></li>
            <li><a href="#" className="hover:text-gray-300">Home  Appliences</a></li>
            <li><a href="#" className="hover:text-gray-300">Bikes</a></li>
            <li><a href="#" className="hover:text-gray-300">Gift Cards</a></li>
            <li><a href="#" className="hover:text-gray-300">Buy Again</a></li>
            <li><a href="#" className="hover:text-gray-300">Gift Ideas</a></li>
            <li><a href="#" className="hover:text-gray-300">Amazon Pay</a></li>
            <li><a href="#" className="hover:text-gray-300">Browsing History</a></li>
            <li><a href="#" className="hover:text-gray-300">Rajat's Amazon.in</a></li>
            <li><a href="#" className="hover:text-gray-300">AmazonBasics</a></li>
            <li><a href="#" className="hover:text-gray-300">Today's Deals</a></li>
          </ul>

          {/* Right Side Icons and Highlighted Text */}
          <div className="flex items-center gap-3">
            <span className="text-yellow-400 font-bold">GRAND FINALE</span>
            <span>PLAYGROUND</span>
            <AiOutlineAmazon className="text-2xl" /> {/* Amazon Icon */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e1/MX_Player_logo.png"
              alt="MX Player Logo"
              className="h-5"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories