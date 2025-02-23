import React, { useEffect, useState, useRef } from "react";
import Nav from "../../navigation/Nav";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getProduct } from "../../actions/productActions";
import { useParams } from "react-router-dom";
import productNotFound from "../img/dataNotFound.gif"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}
const ProductsSearch = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams(); // Get the search keyword from the URL
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const images = [
    'https://m.media-amazon.com/images/I/71h75BcHSdL._AC_SY200_.jpg', 'https://m.media-amazon.com/images/I/71h75BcHSdL._AC_SY200_.jpg', 'https://m.media-amazon.com/images/I/71h75BcHSdL._AC_SY200_.jpg', 'https://m.media-amazon.com/images/I/71h75BcHSdL._AC_SY200_.jpg', 'https://m.media-amazon.com/images/I/71h75BcHSdL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/71h75BcHSdL._AC_SY200_.jpg', 'https://m.media-amazon.com/images/I/71h75BcHSdL._AC_SY200_.jpg', 'https://m.media-amazon.com/images/I/71h75BcHSdL._AC_SY200_.jpg', 'https://m.media-amazon.com/images/I/71h75BcHSdL._AC_SY200_.jpg', 'https://m.media-amazon.com/images/I/71h75BcHSdL._AC_SY200_.jpg'
  ];
  const [maxprice, setmaxprice] = useState()

  const filterProduct = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        minPrice: 0, // Ensuring numeric value
        maxPrice: maxprice // Ensure maxprice is defined before calling this function
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      const response = await fetch("http://localhost:5000/filterProduct", requestOptions);
      const result = await response.json();

      console.log(result);

      if (result.success) { // Assuming success is a boolean
        setProducts(result.products);
      } else {
        console.error("Error: ", result.message || "Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };



  useEffect(() => {
    const fetchProducts = async () => {
      if (keyword) {
        const result = await dispatch(getProduct(keyword)).unwrap();
        setProducts(result.products || []); // Update state with fetched products
      }
    };


    fetchProducts();
  }, [dispatch, keyword]);

  return (
    <div>
      <Nav />
      <div className="container mx-auto p-6 flex gap-6">


        <div className="w-1/4 bg-white shadow-lg rounded-lg p-4 animate-fadeIn">
          <h1 className="text-xl font-bold mb-4">Filters</h1>

          {/* Delivery Day */}
          <div className="mb-5">
            <h2 className="text-lg font-semibold">Delivery Day</h2>
            <label className="flex items-center space-x-2 mt-2 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 accent-blue-600" />
              <span>Get It by Tomorrow</span>
            </label>
          </div>

          {/* Storage Capacity */}
          <div className="mb-5">
            <h2 className="text-lg font-semibold">Storage Capacity</h2>
            {["128 GB", "256 GB", "512 GB"].map((size) => (
              <label key={size} className="flex items-center space-x-2 mt-2 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 accent-blue-600" />
                <span>{size}</span>
              </label>
            ))}
          </div>

          {/* Brands */}
          <div className="mb-5">
            <h2 className="text-lg font-semibold">Brands</h2>
            {["Samsung", "OnePlus", "IQOO", "Apple", "LAVA"].map((brand) => (
              <label key={brand} className="flex items-center space-x-2 mt-2 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 accent-blue-600" />
                <span>{brand}</span>
              </label>
            ))}
          </div>

          {/* Price Range */}
          <div className="mb-5">
            <h2 className="text-lg font-semibold">Price</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm">₹57,900</span>
              <Box sx={{ width: 300 }}>
                <Slider
                  getAriaLabel={() => 'Temperature range'}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
                <input type="text" style={{ border: '2px solid red' }} onChange={(e) => { setmaxprice(e.target.value) }} />
                <button onClick={filterProduct}>onClick</button>
              </Box>
              <span className="text-sm">₹1,21,100+</span>
            </div>
          </div>

        </div>
        <div className="w-3/4 bg-white shadow-lg  rounded-lg p-6 animate-fadeIn">
          {products.length > 0 ? (
            <div className="">
              {products.map((product) => (
                <div key={product._id}
                  onClick={() => navigate(`onedata/${product._id}`)} className="flex gap-6 shadow-sm p-2 mt-3">
                  <div className=" shadow-md p-4 w-[350px] h-[320px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"

                      src={`http://localhost:5000/${product.image[0]}`}
                      alt="Samsung Galaxy S25 Ultra"
                    />
                  </div>
                  <div className="flex w-[400px] flex-col space-y-2">
                    <h2 className="text-xl font-bold">{product.productName}</h2>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-lg font-semibold">₹4,999 <span className="line-through  text-xs text-gray-500">   {product.reducedMRP}</span> <span className="text-green-500">({product.discount}% off)</span></p>
                    <p className="text-sm">Pre-book now for ₹4,999</p>
                    <p className="text-sm text-gray-500">Available to buy tomorrow at 12:00 AM</p>
                    <button className="mt-3 w-[150px] bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">See Options</button>
                    <p className="text-sm mt-2">FREE delivery <span className="font-bold">Tomorrow, 6 Feb</span></p>
                    <p className="text-sm">Or fastest delivery <span className="font-bold">Today 2 pm - 6 pm</span></p>
                    <button className="mt-3 w-[150px] bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "80vh" }}>
              {/* <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/product-is-empty-illustration-download-in-svg-png-gif-file-formats--no-records-list-record-emply-data-user-interface-pack-design-development-illustrations-6430781.png?f=webp"
                  alt=""
                  className="img-fluid"
                /> */}
              <img className="img-fluid h-[40vh]" src={productNotFound} alt="" />
              <p className="mt-4 text-center">No products found for "{keyword}".</p>
            </div>

          )}
        </div>

      </div>

      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-3 rounded-md z-10">
          <FaArrowLeft size={20} />
        </button>
        <div ref={sliderRef} className="flex space-x-4 overflow-x-auto scroll-smooth p-4 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-500 scrollbar-w-400">
          <img src="https://m.media-amazon.com/images/I/51tTsA+tBuL._AC_SY200_.jpg" className="w-60 h-auto rounded-lg object-cover" alt="" />
          <img src="https://m.media-amazon.com/images/I/51tTsA+tBuL._AC_SY200_.jpg" className="w-60 h-auto rounded-lg object-cover" alt="" />
          <img src="https://m.media-amazon.com/images/I/51tTsA+tBuL._AC_SY200_.jpg" className="w-60 h-auto rounded-lg object-cover" alt="" />
          <img src="https://m.media-amazon.com/images/I/51tTsA+tBuL._AC_SY200_.jpg" className="w-60 h-auto rounded-lg object-cover" alt="" />
          <img src="https://m.media-amazon.com/images/I/51tTsA+tBuL._AC_SY200_.jpg" className="w-60 h-auto rounded-lg object-cover" alt="" />
          <img src="https://m.media-amazon.com/images/I/51tTsA+tBuL._AC_SY200_.jpg" className="w-60 h-auto rounded-lg object-cover" alt="" />
          <img src="https://m.media-amazon.com/images/I/51tTsA+tBuL._AC_SY200_.jpg" className="w-60 h-auto rounded-lg object-cover" alt="" />
          <img src="https://m.media-amazon.com/images/I/51tTsA+tBuL._AC_SY200_.jpg" className="w-60 h-auto rounded-lg object-cover" alt="" />
          <img src="https://m.media-amazon.com/images/I/51tTsA+tBuL._AC_SY200_.jpg" className="w-60 h-auto rounded-lg object-cover" alt="" />
          <img src="https://m.media-amazon.com/images/I/51tTsA+tBuL._AC_SY200_.jpg" className="w-60 h-auto rounded-lg object-cover" alt="" />
          <img src="https://m.media-amazon.com/images/I/51tTsA+tBuL._AC_SY200_.jpg" className="w-60 h-auto rounded-lg object-cover" alt="" />
          <img src="https://m.media-amazon.com/images/I/51tTsA+tBuL._AC_SY200_.jpg" className="w-60 h-auto rounded-lg object-cover" alt="" />
          <img src="https://m.media-amazon.com/images/I/51tTsA+tBuL._AC_SY200_.jpg" className="w-60 h-auto rounded-lg object-cover" alt="" />
          <img src="https://m.media-amazon.com/images/I/51tTsA+tBuL._AC_SY200_.jpg" className="w-60 h-auto rounded-lg object-cover" alt="" />
          <img src="https://m.media-amazon.com/images/I/51tTsA+tBuL._AC_SY200_.jpg" className="w-60 h-auto rounded-lg object-cover" alt="" />
          <img src="https://m.media-amazon.com/images/I/51tTsA+tBuL._AC_SY200_.jpg" className="w-60 h-auto rounded-lg object-cover" alt="" />
          <img src="https://m.media-amazon.com/images/I/51tTsA+tBuL._AC_SY200_.jpg" className="w-60 h-auto rounded-lg object-cover" alt="" />
          <img src="https://m.media-amazon.com/images/I/51tTsA+tBuL._AC_SY200_.jpg" className="w-60 h-auto rounded-lg object-cover" alt="" />
        </div>
        <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-3 rounded-md z-10">
          <FaArrowRight size={20} />
        </button>
      </div>

    </div>
  );
};

export default ProductsSearch;
