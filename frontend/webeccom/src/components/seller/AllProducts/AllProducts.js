import React, { useEffect, useRef, useState } from 'react';
import Nav from '../../navigation/Nav';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import './product.css'
import { getProduct } from '../../actions/productActions';
import Poster from '../Posters/Poster';
import Allpros from './Allpros';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Rating } from '@mui/material';


const AllProducts = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const dispatch = useDispatch()

  const { value } = useSelector((state) => {
    // console.log('hello')
    return state.MYproduct
  })

  console.log("value", value)



  const imagesOP = [
    "https://m.media-amazon.com/images/I/71BsqhpSq0L._SX695_.jpg",
    "https://m.media-amazon.com/images/I/61Q9GMxIqcL._SY695_.jpg",
    "https://m.media-amazon.com/images/I/71d1cjLtoxL._SX695_.jpg",
    "https://m.media-amazon.com/images/I/71Asp1Qy-EL._SY695_.jpg"
  ];
  const [mainImage, setMainImage] = useState(imagesOP[0]);

  const [valueRating, setValueRating] = React.useState(2);

  const [hoveredImageIndex, setHoveredImageIndex] = useState({});

  // Handle mouse enter for individual products
  const handleMouseEnter = (productId, index) => {
    setHoveredImageIndex((prev) => ({
      ...prev,
      [productId]: index,
    }));
  };

  // Handle mouse leave to reset image to default (first image)
  const handleMouseLeave = (productId) => {
    setHoveredImageIndex((prev) => {
      const updatedState = { ...prev };
      delete updatedState[productId]; // Remove the key instead of setting it to null
      return updatedState;
    });
  };


  // if (!value.products) {
  //   return (
  //     <div className="text-center h-[100vh] w-[100vw] flex items-center justify-center bg-black text-white">
  //       <div className="relative flex justify-center items-center">
  //         <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
  //         <img
  //           src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
  //           alt="Loading"
  //           className="rounded-full h-28 w-28"
  //         />
  //       </div>
  //     </div>
  //   );

  // }

  // console.log(value.products,'***************')

  // const getProducts = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:5000/getProduct`)
  //     const result = await response.json();
  //     if (result.status === "001") {
  //       setData(result.products);
  //       console.log(result.products)
  //       // console.log("User data : ", result.product);


  //       // console.log(result.product);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  // setTimeout(() => {
  //   <div className="text-center h-[100vh] w-[100vw] flex items-center justify-center bg-black text-white">
  //     <div className="relative flex justify-center items-center">
  //       <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
  //       <img
  //         src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
  //         alt="Loading"
  //         className="rounded-full h-28 w-28"
  //       />
  //     </div>
  //   </div>
  // }, 2000);



  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    dispatch(getProduct(""));
  }, []);

  useEffect(() => {
    // let productsLessThan299 = value.products.filter(p => p.price <= 299)
    // console.log(z,"zzz")

    setData()
  }, [value])

  return (
    <>
      <Nav />
      <div className='m-24'>

        <div>

          <Poster />
        </div>
        <div className="container rounded-sm shadow-md  p-3 mt-4  m-5  w-auto">
          <h2 className="text-2xl font-bold mb-4">Blockbuster deals with exchange</h2>
          <div className=" flex gap-6  scroll pb-3"
          >
            {value.products?.map((product, index) => (
              <div
                key={product._id}
                onClick={() => navigate(`onedata/${product._id}`)}
                className="bg-white  shadow-md p-2 w-72 h-[100%] min-w-[300px]" // Set fixed width and background color
              >
                <img
                  src={`http://localhost:5000/${product.image[0]}`}
                  alt={product.productName}
                  className="w-full h-48  mb-4 object-contain"
                />
                <div className="flex items-center">
                  <div className="bg-red-600 text-white text-xs font-semibold py-1 px-2 rounded">
                    {product.discount}% off
                  </div>
                  <div className="ml-2 text-red-600 text-sm font-bold">
                    Great Indian Festival
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2"> {product.productName}</h3>
                <Rating
                  name="simple-uncontrolled"
                  onChange={(event, newValue) => {
                    console.log(newValue);
                  }}
                  defaultValue={2}
                />
                <p className="text-gray-800 font-medium mb-2">
                  ₹ {product.price}{' '} M.R.P: ₹
                  <span className="line-through text-gray-500">   {product.reducedMRP}</span>
                </p>
                {/* <p className="text-gray-600 mb-4 font-semibold"> {product.description}</p> */}

              </div>
            ))}
          </div>
        </div>

        {/* // slider */}
        <div className="relative w-full max-w-7xl bg-white p-2 mx-auto overflow-hidden">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 h-24 w-11  shadow-md text-black p-3 rounded-md z-10"
          >
            <FaArrowLeft size={20} />
          </button>

          {/* Product Slider */}
          <div
            ref={sliderRef}
            className="flex space-x-4 overflow-x-auto scroll-smooth p-4 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-500 h-auto"
          >
            {value.products
              ?.filter((product) => product.price <= 299)
              .map((product) => (
                <div
                  key={product._id}
                  onClick={() => navigate(`onedata/${product._id}`)}
                  className="bg-white shadow-md p-2 w-44 h-70 min-w-[220px] flex flex-col justify-between rounded-lg"
                >
                  <div className="w-52 h-60">
                    <img
                      src={`http://localhost:5000/${product.image[0]}`}
                      className="w-full h-full rounded-lg object-cover"
                      alt="Product"
                    />
                  </div>
                </div>
              ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 h-24 w-11  shadow-md text-black p-3 rounded-md z-10"
          >
            <FaArrowRight size={20} />
          </button>
        </div>

        <div className="container rounded-sm shadow-md p-3 mt-4 m-5 w-auto">
          <h2 className="text-2xl font-bold mb-4">Blockbuster deals On Watches</h2>
          <div className="flex gap-6 scroll pb-3">
            {value.products
              ?.filter((product) => product.productCategoryName === "watches") // Filter products by category
              .map((product) => (
                <div
                  key={product._id}
                  onClick={() => navigate(`onedata/${product._id}`)}
                  className="bg-white shadow-md p-2 w-72 h-[100%] min-w-[300px]"
                >
                  <img
                    src={`http://localhost:5000/${product.image[0]}`}
                    alt={product.productName}
                    className="w-full h-48 mb-4 object-contain"
                  />
                  <div className="flex items-center">
                    <div className="bg-red-600 text-white text-xs font-semibold py-1 px-2 rounded">
                      {product.discount}% off
                    </div>
                    <div className="ml-2 text-red-600 text-sm font-bold">
                      Great Indian Festival
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
                  <Rating
                    name="simple-uncontrolled"
                    onChange={(event, newValue) => {
                      console.log(newValue);
                    }}
                    defaultValue={2}
                  />
                  <p className="text-gray-800 font-medium mb-2">
                    ₹ {product.price} M.R.P: ₹
                    <span className="line-through text-gray-500">
                      {product.reducedMRP}
                    </span>
                  </p>
                </div>
              ))}
          </div>
        </div>



        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-3">


              <div className='p-3 bg-white rounded-md shadow-lg h-auto'>
                <h1 className='text-bold text-lg font-bold'>Explore more</h1>
                <div className="p-2 flex flex-col justify-center">
                  {/* Main Image */}
                  <img className='flex justify-center w-[300px] h-[150px] object-contain' src={mainImage} alt="Main" />

                  <div className='leading-tight'>
                    <h1 className='text-sm text-grey pt-3'>AFROJACK Men's Chelsea Ankle Boots</h1>
                    <p className='mt-1'>
                      <span className='text-lg font-bold'>₹999</span>
                      <span className='text-xs ps-2 pb-2 pt-2'>M.R.P.: ₹6,495</span>
                    </p>
                  </div>

                  {/* Thumbnail Images */}
                  <div className='flex justify-around mt-2'>
                    {imagesOP.map((img, index) => (
                      <div
                        key={index}
                        className=' border-2 p-1 rounded-md cursor-pointer'
                        onMouseOver={() => setMainImage(img)}
                      >
                        <img className='flex justify-center w-12' src={img} alt={`Thumbnail ${index}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>



            </div>
            <div className="col-lg-3">


              <div className='p-3 bg-white rounded-md shadow-lg h-auto'>
                <h1 className='text-bold text-lg font-bold'>Explore more</h1>
                <div className="p-2 flex flex-col justify-center">
                  {/* Main Image */}
                  <img className='flex justify-center w-[300px] h-[150px] object-contain' src={mainImage} alt="Main" />

                  <div className='leading-tight'>
                    <h1 className='text-sm text-grey pt-3'>AFROJACK Men's Chelsea Ankle Boots</h1>
                    <p className='mt-1'>
                      <span className='text-lg font-bold'>₹999</span>
                      <span className='text-xs ps-2 pb-2 pt-2'>M.R.P.: ₹6,495</span>
                    </p>
                  </div>

                  {/* Thumbnail Images */}
                  <div className='flex justify-around mt-2'>
                    {imagesOP.map((img, index) => (
                      <div
                        key={index}
                        className='border border-2 p-1 rounded-md cursor-pointer'
                        onMouseOver={() => setMainImage(img)}
                      >
                        <img className='flex justify-center w-12' src={img} alt={`Thumbnail ${index}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>



            </div>
            <div className="col-lg-3">



              <div className='p-3 bg-white rounded-md shadow-lg h-auto'>
                <h1 className='text-bold text-lg font-bold'>Explore more</h1>
                <div className="p-2 flex flex-col justify-center">
                  {/* Main Image */}
                  <img className='flex justify-center w-[300px] h-[150px] object-contain' src={mainImage} alt="Main" />

                  <div className='leading-tight'>
                    <h1 className='text-sm text-grey pt-3'>AFROJACK Men's Chelsea Ankle Boots</h1>
                    <p className='mt-1'>
                      <span className='text-lg font-bold'>₹999</span>
                      <span className='text-xs ps-2 pb-2 pt-2'>M.R.P.: ₹6,495</span>
                    </p>
                  </div>

                  {/* Thumbnail Images */}
                  <div className='flex justify-around mt-2'>
                    {imagesOP.map((img, index) => (
                      <div
                        key={index}
                        className='border border-2 p-1 rounded-md cursor-pointer'
                        onMouseOver={() => setMainImage(img)}
                      >
                        <img className='flex justify-center w-12' src={img} alt={`Thumbnail ${index}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>



            </div>
            <div className="col-lg-3">


              <div className='p-3 bg-white rounded-md shadow-lg h-auto'>
                <h1 className='text-bold text-lg font-bold'>Explore more</h1>
                <div className="p-2 flex flex-col justify-center">
                  {/* Main Image */}
                  <img className='flex justify-center w-[300px] h-[150px] object-contain' src={mainImage} alt="Main" />

                  <div className='leading-tight'>
                    <h1 className='text-sm text-grey pt-3'>AFROJACK Men's Chelsea Ankle Boots</h1>
                    <p className='mt-1'>
                      <span className='text-lg font-bold'>₹999</span>
                      <span className='text-xs ps-2 pb-2 pt-2'>M.R.P.: ₹6,495</span>
                    </p>
                  </div>

                  {/* Thumbnail Images */}
                  <div className='flex justify-around mt-2'>
                    {imagesOP.map((img, index) => (
                      <div
                        key={index}
                        className='border border-2 p-1 rounded-md cursor-pointer'
                        onMouseOver={() => setMainImage(img)}
                      >
                        <img className='flex justify-center w-12' src={img} alt={`Thumbnail ${index}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>


        {/* api all products in card form */}
        <div className="container mx-auto mt-5 mb-4 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {value.products
              ?.filter((product) => product.price <= 299)
              .map((product) => {
                const hoveredIndex = hoveredImageIndex[product._id]; // Get hovered index

                return (
                  <div
                    key={product._id}
                    className="bg-white shadow-md p-3 rounded-lg flex flex-col justify-between hover:shadow-lg transition duration-300"
                  >
                    <div
                      onClick={() => navigate(`onedata/${product._id}`)}
                      className="cursor-pointer"
                    >
                      <h1 className="text-lg font-bold text-center mb-2">
                        Explore more
                      </h1>

                      {/* Main Image */}
                      <img
                        src={`http://localhost:5000/${hoveredIndex !== undefined ? product.image[hoveredIndex] : product.image[0]}`}
                        alt={product.productName}
                        className="w-full h-40 object-contain rounded-md"
                      />

                      {/* Product Info */}
                      <div className="text-center mt-2">
                        <h2 className="text-sm text-gray-700">{product.productName}</h2>
                        <p className="mt-1">
                          <span className="text-lg font-bold">${product.price}</span>
                          <span className="text-xs text-red-500 ml-2">
                            {product.discount}% off
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Thumbnail Images */}
                    <div className="flex justify-center gap-2 mt-3">
                      {product.image.slice(0, 4).map((img, index) => (
                        <div
                          key={index}
                          className={`border ${hoveredIndex === index ? "border-blue-500" : "border-gray-300"} rounded-md cursor-pointer p-1 transition duration-200`}
                          onMouseEnter={() => handleMouseEnter(product._id, index)}
                          onMouseLeave={() => handleMouseLeave(product._id)}
                        >
                          <img
                            src={`http://localhost:5000/${img}`}
                            alt={`product_img_${index}`}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>



        <div className="flex justify-between">

          <div className=' m-10 p-3 bg-white rounded-md shadow-lg w-[300px] h-auto'>
            <h1 className='text-bold text-lg font-bold'>Explore more </h1>
            <div className=" p-2 flex flex-col justify-center">
              <img className='flex justify-center w-[300px] h-[150px] object-contain' src="https://m.media-amazon.com/images/I/71h75BcHSdL._AC_SY175_.jpg" alt="" />
              <div className='leading-tight'>
                <h1 className='text-sm text-grey pt-3'>AFROJACK Men's Chelsea Ankle Boots</h1>
                <p className='mt-1'><span className='text-lg font-bold'>₹999</span><span className='text-xs ps-2 pb-2 pt-2'>M.R.P.: ₹6,495</span></p>

              </div>
              <div className='flex justify-around mt-2'>
                <div className='border border-2 p-1 rounded-md'>
                  <img className='flex justify-center w-12' src="https://m.media-amazon.com/images/I/71h75BcHSdL._AC_SY175_.jpg" alt="" />
                </div>
                <div className='border border-2 p-1 rounded-md'>
                  <img className='flex justify-center w-12' src="https://m.media-amazon.com/images/I/71h75BcHSdL._AC_SY175_.jpg" alt="" />
                </div>
                <div className='border border-2 p-1 rounded-md'>
                  <img className='flex justify-center w-12' src="https://m.media-amazon.com/images/I/71h75BcHSdL._AC_SY175_.jpg" alt="" />
                </div>
                <div className='border border-2 p-1 rounded-md'>
                  <img className='flex justify-center w-12' src="https://m.media-amazon.com/images/I/71h75BcHSdL._AC_SY175_.jpg" alt="" />
                </div>
              </div>

            </div>
          </div>


          <div className=' m-10 p-3 bg-white rounded-md shadow-lg w-[300px] h-auto'>
            <h1 className='text-bold text-lg font-bold'>Explore more </h1>
            <div className=" p-2 flex flex-col justify-center">
              <img className='flex justify-center w-[300px] h-[150px] object-contain' src="https://m.media-amazon.com/images/I/51CRDDG6s4L._AC_SY175_.jpg" alt="" />
              <div className='leading-tight'>
                <h1 className='text-sm text-grey pt-3'>AFROJACK Men's Chelsea Ankle Boots</h1>
                <p className='mt-1'><span className='text-lg font-bold'>₹999</span><span className='text-xs ps-2 pb-2 pt-2'>M.R.P.: ₹6,495</span></p>

              </div>
              <div className='flex justify-around mt-2'>
                <div className='border border-2 p-1 rounded-md'>
                  <img className='flex justify-center w-12' src="https://m.media-amazon.com/images/I/51CRDDG6s4L._AC_SY175_.jpg" alt="" />
                </div>
                <div className='border border-2 p-1 rounded-md'>
                  <img className='flex justify-center w-12' src="https://m.media-amazon.com/images/I/51CRDDG6s4L._AC_SY175_.jpg" alt="" />
                </div>
                <div className='border border-2 p-1 rounded-md'>
                  <img className='flex justify-center w-12' src="https://m.media-amazon.com/images/I/51CRDDG6s4L._AC_SY175_.jpg" alt="" />
                </div>
                <div className='border border-2 p-1 rounded-md'>
                  <img className='flex justify-center w-12' src="https://m.media-amazon.com/images/I/51CRDDG6s4L._AC_SY175_.jpg" alt="" />
                </div>
              </div>

            </div>
          </div>
          <div className=' m-10 p-3 bg-white rounded-md shadow-lg w-[300px] h-auto'>
            <h1 className='text-bold text-lg font-bold'>Explore more </h1>
            <div className=" p-2 flex flex-col justify-center">
              <img className='flex justify-center w-[300px] h-[150px] object-contain' src="https://m.media-amazon.com/images/I/51CRDDG6s4L._AC_SY175_.jpg" alt="" />
              <div className='leading-tight'>
                <h1 className='text-sm text-grey pt-3'>AFROJACK Men's Chelsea Ankle Boots</h1>
                <p className='mt-1'><span className='text-lg font-bold'>₹999</span><span className='text-xs ps-2 pb-2 pt-2'>M.R.P.: ₹6,495</span></p>

              </div>
              <div className='flex justify-around mt-2'>
                <div className='border border-2 p-1 rounded-md'>
                  <img className='flex justify-center w-12' src="https://m.media-amazon.com/images/I/51CRDDG6s4L._AC_SY175_.jpg" alt="" />
                </div>
                <div className='border border-2 p-1 rounded-md'>
                  <img className='flex justify-center w-12' src="https://m.media-amazon.com/images/I/51CRDDG6s4L._AC_SY175_.jpg" alt="" />
                </div>
                <div className='border border-2 p-1 rounded-md'>
                  <img className='flex justify-center w-12' src="https://m.media-amazon.com/images/I/51CRDDG6s4L._AC_SY175_.jpg" alt="" />
                </div>
                <div className='border border-2 p-1 rounded-md'>
                  <img className='flex justify-center w-12' src="https://m.media-amazon.com/images/I/51CRDDG6s4L._AC_SY175_.jpg" alt="" />
                </div>
              </div>

            </div>
          </div>



          <div className=' m-10 p-3 bg-white rounded-md shadow-lg w-[350px] h-auto'>
            <div className='flex justify-between p-3'>
              <div>
                <img className='h-[100px]' src="https://m.media-amazon.com/images/I/31U7DsTXDxL._MCnd_AC_.jpg" alt="" />
                <h6 className='text-base font-bold'>Sweatshirt for Men</h6>
              </div>
              <div>
                <img className='h-[100px]' src="https://m.media-amazon.com/images/I/41IZrCXfsSL._MCnd_AC_.jpg" alt="" />
                <h6 className='text-base font-bold'>Sweatshirt for Men</h6>

              </div>
            </div>
            <div className='flex justify-between p-3 pt-2'>
              <div>
                <img className='h-[100px]' src="https://m.media-amazon.com/images/I/31ztpzzaDSL._MCnd_AC_.jpg" alt="" />
                <h6 className='text-base font-bold'>Sweatshirt for Men</h6>

              </div>
              <div>
                <img className='h-[100px] bg-slate-400  text-center' src="https://m.media-amazon.com/images/I/41SwyubT5sL._MCnd_AC_.jpg" alt="" />
                <h6 className='text-base font-bold'>Sweatshirt for Men</h6>

              </div>
            </div>
          </div>


        </div>


        {/* <Box
        sx={{
          display: 'flex',
          gap: 3,
          padding: 2,
          overflowX: 'scroll', // Enable horizontal scrolling
          flexWrap: 'nowrap', // Prevent wrapping
          margin: '0 auto', // Center the container horizontally
          minWidth: '300px',
          '&::-webkit-scrollbar': {
            height: '8px', // Adjust the height of the scrollbar
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888', // Customize the scrollbar color
            borderRadius: '10px', // Rounded corners for the scrollbar
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555', // Change color on hover
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#f1f1f1', // Background color of the scrollbar track
          },
        }}
      >
        {value.products?.map((product, index) => (
          <Card
            key={product._id}
            onClick={() => navigate(`onedata/${product._id}`)}
            className="relative rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            sx={{
              minWidth: '290px', // Fixed minimum width for each card
              maxWidth: '345px', // Optional: Limit the maximum width of each card
              flex: '1 0 auto', // Allow the card to take its minimum width and grow
            }}
          >
            <CardMedia
              component="img"
              height="240"
              image={`http://localhost:5000/Uploads/${product.image[0]}`} // Display the first image in the array
              alt={product.productName}
              sx={{
                objectFit: 'contain',
                height: '240px',
                width: '100%',
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                top: 8,
                left: 8,
                backgroundColor: 'red',
                color: 'white',
                fontWeight: 'bold',
                padding: '2px 8px',
                borderRadius: 1,
              }}
            >
              {product.discount}% off
            </Box>

            <CardContent>
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                {product.productName}
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ marginY: 1 }}>
                {product.description}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="h5" color="text.primary" sx={{ fontWeight: 'bold' }}>
                  ₹{product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                  M.R.P: ₹{product.reducedMRP}
                </Typography>
              </Box>

              <Typography
                variant="caption"
                sx={{ backgroundColor: 'red.100', color: 'red.800', padding: '4px 8px', borderRadius: 1 }}
              >
                Great Indian Festival
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                <Button variant="contained" color="primary">
                  Buy Now
                </Button>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon color="error" />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box> */}
        {/* <Allpros/> */}
        {/* <ProductSection /> */}
      </div>
    </>
  );
};

export default AllProducts;
