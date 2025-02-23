// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import Nav from '../../navigation/Nav';
// import '../OnProducts/onproduct.css';
// import { PiGreaterThan } from 'react-icons/pi';
// import ReactImageMagnify from 'react-image-magnify';
// import { useDispatch, useSelector } from 'react-redux';
// import { addCarts, getProduct } from '../../actions/productActions';

// const Product = () => {
//   const { userId } = useParams();
//   const [mouseImage, setMouseImage] = useState(0);
//   const [productData, setProductData] = useState(null);
//   const [id, setid] = useState("");
//   const [filterProduct, setfilterProdcut] = useState([])
//   const [newFilterProdcut, setnewFilterProdcut] = useState([])

//   const dispatch = useDispatch()
//   const navigate = useNavigate();


//   const { value } = useSelector((state) => {

//     return state.MYproduct
//   })

//   // console.log(value.products)
//   // if(id){
//   //   let newFilterProdcut = value.products.filter((value)=>{
//   //    return  value._id !=id
//   //   })
//   //   setnewFilterProdcut(newFilterProdcut)

//   // }
//   // console.log("newFilterProdcut",newFilterProdcut)

//   console.log("id", id)


//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const requestOptions = {
//           method: 'GET',
//           redirect: 'follow',
//         };

//         const response = await fetch(`http://localhost:5000/getProduct/${userId}`, requestOptions);
//         const result = await response.json();
//         if (result?.all) {
//           setid(result.all._id);
//           console.log("resultwe ", result.all._id)
//           setProductData(result.all);
//           let newFilterProdcut = value.products.filter((value) => {
//             return value._id != id
//           })
//           setnewFilterProdcut(newFilterProdcut)

//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchProduct();
//   }, [userId, id]);

//   useEffect(() => {
//     dispatch(getProduct(""));
//   }, [])


//   const [quantity, setQuantity] = useState(1);

//   const handleIncrement = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleDecrement = () => {
//     setQuantity(quantity > 1 ? quantity - 1 : 1);
//   };

//   console.log(productData, "asdfads")

//   if (!productData) {
//     return (
//       <div className="text-center h-[100vh] w-[100vw] flex items-center justify-center bg-black text-white">
//         <div className="relative flex justify-center items-center">
//           <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
//           <img
//             src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
//             alt="Loading"
//             className="rounded-full h-28 w-28"
//           />
//         </div>
//       </div>
//     );

//   }

//   // setTimeout(() => {
//   //   if (!productData) {
//   //     return (
//   //       <div className="text-center h-[100vh] w-[100vw] flex items-center justify-center bg-black text-white">
//   //         <div className="relative flex justify-center items-center">
//   //           <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
//   //           <img
//   //             src={image}
//   //             alt="Loading"
//   //             className="rounded-full h-28 w-28"
//   //           />
//   //         </div>
//   //       </div>
//   //     );

//   //   }
//   // }, 2000);

// const {
//   image,
//   productName,
//   // description,
//   discount,
//   price,
//   reducedMRP,
//   size,
//   color,
//   specialization,
//   soldBy,
//   leadTime,
//   responseRate,
//   features,
//   _id
// } = productData;

//   // console.log(_id,"_id*******************************")




//   return (
//     <>
//       <div>

//         <Nav />
//         <div className="container-fluid mt-3">
//           <div className="row">

//             <div className="col-lg-5 h-[70vh] overflow-hidden">

//               <div className='d-flex justify-content-between'>
//                 {/* <div className="">
//                 {image?.map((img, index) => (
//                   <div className="Seprate_products" key={index} onMouseEnter={() => { setMouseImage(index) }} >
//                     <img
//                       style={{ width: '5rem' }}
//                       src={`http://localhost:5000/${img}`}
//                       alt={`product_img_${index}`}
//                     />
//                   </div>
//                 ))}
//               </div>
//               <div className="Product-items" style={{ display: 'flex' }}>
//                 <div className='shadow-lg' style={{ zIndex: '9999', position: 'relative', width: '100%', maxWidth: '500px', height: "100%", border: "2px solid red" }}>
//                   <ReactImageMagnify
//                     {...{
//                       smallImage: {
//                         alt: productName,
//                         isFluidWidth: true,
//                         src: `http://localhost:5000/${image[mouseImage]}`,

//                       },
//                       largeImage: {
//                         src: `http://localhost:5000/${image[mouseImage]}`,
//                         width: 1400,
//                         height: 700,
//                       },
//                       enlargedImageContainerStyle: { zIndex: 9999 },
//                       enlargedImageContainerDimensions: {
//                         width: '100%',
//                         height: 500,
//                       },
//                     }}
//                   />
//                 </div>
//               </div> */}
//                 <div>
//                   <div className="flex gap-4">
//                     {/* Thumbnail Images */}
//                     <div className="space-y-2">
//                       {image?.map((img, index) => (
//                         <div
//                           key={index}
//                           className={`border ${mouseImage === index ? 'border-blue-500' : 'border-gray-300'} 
//             rounded-md cursor-pointer p-1`}
//                           onMouseEnter={() => setMouseImage(index)}
//                         >
//                           <img
//                             src={`http://localhost:5000/${img}`}
//                             alt={`product_img_${index}`}
//                             className="w-16 h-16 object-cover rounded-md"
//                           />
//                         </div>
//                       ))}
//                     </div>
//                     {/* <div className="relative w-full z-50 h-full border-2 border-gray-300 rounded-md shadow-lg">
//                       <ReactImageMagnify
//                         {...{
//                           smallImage: {
//                             alt: productName,
//                             isFluidWidth: true,
//                             className: "object-cover  border-5 border-black w-full h-full rounded-md", 
//                             src: `http://localhost:5000/${image[mouseImage]}`,
//                           },
//                           largeImage: {
//                              className: "object-cover  border-5 border-black w-full h-full rounded-md",

//                             src: `http://localhost:5000/${image[mouseImage]}`,
//                             width: 1400,
//                             height: 700,
//                           },
//                           enlargedImageContainerStyle: { zIndex: 10 },
//                           enlargedImageContainerDimensions: {
//                             className: "object-cover  border-5 border-black w-full h-full rounded-md",

//                             width: '120%',
//                             height: '100%',
//                           },
//                         }}
//                       />
//                     </div> */}
//                     <div className='h-96 border-rose-200'>
//                       <div className="w-full  relative z-[50] ">
//                         <ReactImageMagnify
//                           {...{
//                             smallImage: {
//                               alt: "Product Image",
//                               isFluidWidth: true,
//                               src: image[mouseImage] ? `http://localhost:5000/${image[mouseImage]}` : "",
//                               sizes: "(max-width: 768px) 100vw, 50vw",
//                             },
//                             largeImage: {
//                               src: image[mouseImage] ? `http://localhost:5000/${image[mouseImage]}` : "",
//                               width: 2000, // High-resolution zoom
//                               height: 2500,
//                             },
//                             enlargedImageContainerDimensions: {
//                               width: "100%", // Full wide magnification
//                               height: "100%",
//                             },
//                             enlargedImageContainerStyle: {
//                               zIndex: 99999, // Ensure zoom image is always on top
//                               position: "absolute",
//                               right: "-80%", // Adjust spacing so it doesn't cut off
//                             },
//                             enlargedImagePosition: "right",
//                           }}
//                         />
//                       </div>
//                     </div>


//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-7">
//               <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="max-w-5xl  mx-auto p-6 flex flex-col md:flex-row gap-8 border-b-2 border-gray-300  overflow-scroll no-scrollbar">
//                 {/* Left Section - Product Details */}
//                 <div className="flex-1 border-b-2  pb-4">
//                   <div className='border-b-2 border-gray-400 '>
//                     <p className="text-gray-500 text-sm">Brand: <span className="text-blue-600 font-semibold">Aphe Fashion</span></p>
//                     <h2 className="text-2xl font-bold mt-1">{productName}</h2>
//                   </div>

//                   {/* Price Section */}
//                   <div className="mt-3 border-b-2 border-gray-400 ">
//                     <p className="text-red-600 text-lg font-semibold">- {discount}% ₹{price}</p>
//                     <p className="text-gray-500 line-through">M.R.P: ₹{reducedMRP}</p>
//                     <p className="text-gray-700 text-sm">Inclusive of all taxes</p>
//                   </div>

//                   {/* Product Options */}
//                   <div className="mt-4 space-y-2">
//                     <p className="font-semibold">Color: <span className="text-gray-600">{color}</span></p>
//                     <p className="font-semibold">Size: <span className="text-gray-600">{size}</span></p>
//                     <p className="font-semibold">Specification: <span className="text-gray-600">{specialization}</span></p>
//                   </div>

//                   <div className="mt-4 bg-gray-100 p-4 rounded-lg border">
//                     <p className="font-semibold">Sold by: <span className="text-blue-600">{soldBy}</span></p>
//                     <p className="text-green-600 font-medium">✔ Verified Seller</p>
//                     <p>Lead Time: <strong>{leadTime}</strong> days</p>
//                     <p>Response Rate: <strong>{responseRate}%</strong></p>
//                   </div>

//                   {/* Features */}
//                   <div className="mt-4 border-t-2 pt-4">
//                     <h3 className="font-semibold text-lg">Features</h3>
//                     <p className="text-gray-600 leading-relaxed">{features}</p>
//                   </div>
//                 </div>

//                 {/* Right Section - Purchase Box */}
//                 <div className="mt-6 p-2 border rounded-lg shadow-lg max-w-sm w-full md:w-1/3 self-start border-b-2">
//                   <p className="text-2xl font-bold">₹{price}</p>
//                   <p className="text-green-600 font-semibold">In Stock</p>
//                   <p className="text-sm text-gray-500">FREE delivery Monday, 24 February</p>

//                   <div className="mt-3">
//                     <label className="block text-sm font-medium">Quantity:</label>
//                     <div className="flex justify-between border p-2 rounded-lg shadow-sm bg-white">
//                       <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-l">-</button>
//                       <input type="text" value={1} readOnly className="w-10 text-center border-none" />
//                       <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-r">+</button>
//                     </div>
//                   </div>

//                   <button onClick={() => dispatch(addCarts(_id))} className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 mt-4 rounded-3xl shadow-md">Add to Cart</button>
//                   <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 mt-2 rounded-3xl shadow-md">Buy Now</button>
//                 </div>
//               </div>
//             </div>




//           </div>
//         </div>



//         <div className="container rounded-sm  p-3 mt-4">
//           <h2 className="text-2xl font-bold mb-4">Blockbuster deals with exchange</h2>
//           <div className=" grid grid-cols-5 gap-6  pb-3"
//           >
//             {newFilterProdcut?.map((product, index) => (
//               <div
//                 key={product._id}
//                 onClick={() => {
//                   navigate(`/onedata/${product._id}`)
//                   window.scrollTo(0, 0)
//                 }}
//                 className="bg-white  shadow-md p-2 w-72 h-[100%] min-w-[270px]" // Set fixed width and background color
//               >
//                 <img
//                   src={`http://localhost:5000/${product.image[0]}`}
//                   alt={product.productName}
//                   className="w-full h-48 object-contain  mb-4"
//                 />
//                 <div className="flex items-center">
//                   <div className="bg-red-600 text-white text-xs font-semibold py-1 px-2 rounded">
//                     {product.discount}% off
//                   </div>
//                   <div className="ml-2 text-red-600 text-sm font-bold">
//                     Great Indian Festival
//                   </div>
//                 </div>
//                 <h3 className="text-lg font-semibold mb-2"> {product.productName}</h3>
//                 <p className="text-gray-800 font-medium mb-2">
//                   ₹ {product.price}{' '} M.R.P: ₹
//                   <span className="line-through text-gray-500">   {product.reducedMRP}</span>
//                 </p>
//                 <p className="text-gray-600 mb-4 font-semibold"> {product.description}</p>

//               </div>
//             ))}
//           </div>
//         </div>



//       </div>
//     </>

//   );
// };

// export default Product;




import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from '../../navigation/Nav';
import '../OnProducts/onproduct.css';
import { PiGreaterThan } from 'react-icons/pi';
import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';
import { addCarts, getProduct } from '../../actions/productActions';

const Product = () => {
  const { userId } = useParams();
  const [mouseImage, setMouseImage] = useState(0);
  const [productData, setProductData] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]); // Store related products
  const [otherProducts, setOtherProducts] = useState([]); // Store other products
  const [productCategoryName, setProductCategoryName] = useState(""); // Store the category name

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { value } = useSelector((state) => state.MYproduct);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow',
        };

        const response = await fetch(`http://localhost:5000/getProduct/${userId}`, requestOptions);
        const result = await response.json();

        if (result?.all) {
          setProductData(result.all);
          setProductCategoryName(result.all.productCategoryName);

          const related = value.products.filter((product) => product.productCategoryName === result.all.productCategoryName && product._id !== result.all._id);
          setRelatedProducts(related);

          const others = value.products.filter((product) => product.productCategoryName !== result.all.productCategoryName);
          setOtherProducts(others);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [userId, value.products]);

  useEffect(() => {
    dispatch(getProduct(""));
  }, []); // This useEffect is now also outside the conditional

  if (!productData) { // This conditional is ONLY for what to *render*
    return (
      <div className="text-center h-[100vh] w-[100vw] flex items-center justify-center bg-black text-white">
        {/* ... loading spinner ... */}
      </div>
    );
  }

  const { // Now this destructuring is safe, productData is guaranteed to exist
    image,
    productName,
    discount,
    price,
    reducedMRP,
    size,
    color,
    specialization,
    soldBy,
    leadTime,
    responseRate,
    features,
    _id
  } = productData;


  return (
    <>
      <Nav />
      <div className="container-fluid mt-3">
        <div className="row">

          <div className="col-lg-5 h-[70vh] overflow-hidden">

            <div className='d-flex justify-content-between'>
              {/* <div className="">
                {image?.map((img, index) => (
                  <div className="Seprate_products" key={index} onMouseEnter={() => { setMouseImage(index) }} >
                    <img
                      style={{ width: '5rem' }}
                      src={`http://localhost:5000/${img}`}
                      alt={`product_img_${index}`}
                    />
                  </div>
                ))}
              </div>
              <div className="Product-items" style={{ display: 'flex' }}>
                <div className='shadow-lg' style={{ zIndex: '9999', position: 'relative', width: '100%', maxWidth: '500px', height: "100%", border: "2px solid red" }}>
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: productName,
                        isFluidWidth: true,
                        src: `http://localhost:5000/${image[mouseImage]}`,

                      },
                      largeImage: {
                        src: `http://localhost:5000/${image[mouseImage]}`,
                        width: 1400,
                        height: 700,
                      },
                      enlargedImageContainerStyle: { zIndex: 9999 },
                      enlargedImageContainerDimensions: {
                        width: '100%',
                        height: 500,
                      },
                    }}
                  />
                </div>
              </div> */}
              <div>
                <div className="flex gap-4">
                  {/* Thumbnail Images */}
                  <div className="space-y-2  pr-2">
                    {image?.map((img, index) => (
                      <div
                        key={index}
                        className={`border ${mouseImage === index ? 'border-blue-500' : 'border-gray-300'
                          } rounded-md cursor-pointer p-1 w-20`}
                        onMouseEnter={() => setMouseImage(index)}
                      >
                        <img
                          src={`http://localhost:5000/${img}`}
                          alt={`product_img_${index}`}
                          className="w-16 h-16 object-contain rounded-md"
                        />
                      </div>
                    ))}
                  </div>




                  {/* <div className="relative w-full z-50 h-full border-2 border-gray-300 rounded-md shadow-lg">
                      <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: productName,
                            isFluidWidth: true,
                            className: "object-cover  border-5 border-black w-full h-full rounded-md", 
                            src: `http://localhost:5000/${image[mouseImage]}`,
                          },
                          largeImage: {
                             className: "object-cover  border-5 border-black w-full h-full rounded-md",
                            
                            src: `http://localhost:5000/${image[mouseImage]}`,
                            width: 1400,
                            height: 700,
                          },
                          enlargedImageContainerStyle: { zIndex: 10 },
                          enlargedImageContainerDimensions: {
                            className: "object-cover  border-5 border-black w-full h-full rounded-md",

                            width: '120%',
                            height: '100%',
                          },
                        }}
                      />
                    </div> */}
                  <div className='h-96 border-rose-200'>
                    <div className="w-full   relative z-[999999] ">
                      <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: "Product Image",
                            isFluidWidth: true,
                            src: image[mouseImage] ? `http://localhost:5000/${image[mouseImage]}` : "",
                            sizes: "(max-width: 768px) 100vw, 50vw",
                          },
                          largeImage: {
                            src: image[mouseImage] ? `http://localhost:5000/${image[mouseImage]}` : "",
                            width: 2000, // High-resolution zoom
                            height: 2500,
                            zIndex:9999999
                          },
                          enlargedImageContainerDimensions: {
                            width: "100%", // Full wide magnification
                            height: "100%",
                            zIndex:9999999
                          },
                          enlargedImageContainerStyle: {
                            zIndex: 99999, // Ensure zoom image is always on top
                            position: "absolute",
                            right: "-80%", // Adjust spacing so it doesn't cut off
                          },
                          enlargedImagePosition: "right",
                        }}
                      />
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="max-w-5xl  mx-auto p-6 flex flex-col md:flex-row gap-8 border-b-2 border-gray-300  overflow-scroll no-scrollbar">
              {/* Left Section - Product Details */}
              <div className="flex-1 border-b-2  pb-4">
                <div className='border-b-2 border-gray-400 '>
                  <p className="text-gray-500 text-sm">Brand: <span className="text-blue-600 font-semibold">Aphe Fashion</span></p>
                  <h2 className="text-2xl font-bold mt-1">{productName}</h2>
                </div>

                {/* Price Section */}
                <div className="mt-3 border-b-2 border-gray-400 ">
                  <p className="text-red-600 text-lg font-semibold">- {discount}% ₹{price}</p>
                  <p className="text-gray-500 line-through">M.R.P: ₹{reducedMRP}</p>
                  <p className="text-gray-700 text-sm">Inclusive of all taxes</p>
                </div>

                {/* Product Options */}
                <div className="mt-4 space-y-2">
                  <p className="font-semibold">Color: <span className="text-gray-600">{color}</span></p>
                  <p className="font-semibold">Size: <span className="text-gray-600">{size}</span></p>
                  <p className="font-semibold">Specification: <span className="text-gray-600">{specialization}</span></p>
                </div>

                <div className="mt-4 bg-gray-100 p-4 rounded-lg border">
                  <p className="font-semibold">Sold by: <span className="text-blue-600">{soldBy}</span></p>
                  <p className="text-green-600 font-medium">✔ Verified Seller</p>
                  <p>Lead Time: <strong>{leadTime}</strong> days</p>
                  <p>Response Rate: <strong>{responseRate}%</strong></p>
                </div>

                {/* Features */}
                <div className="mt-4 border-t-2 pt-4">
                  <h3 className="font-semibold text-lg">Features</h3>
                  <p className="text-gray-600 leading-relaxed">{features}</p>
                </div>
              </div>

              {/* Right Section - Purchase Box */}
              <div className="mt-6 p-2 border rounded-lg shadow-lg max-w-sm w-full md:w-1/3 self-start border-b-2">
                <p className="text-2xl font-bold">₹{price}</p>
                <p className="text-green-600 font-semibold">In Stock</p>
                <p className="text-sm text-gray-500">FREE delivery Monday, 24 February</p>

                <div className="mt-3">
                  <label className="block text-sm font-medium">Quantity:</label>
                  <div className="flex justify-between border p-2 rounded-lg shadow-sm bg-white">
                    <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-l">-</button>
                    <input type="text" value={1} readOnly className="w-10 text-center border-none" />
                    <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-r">+</button>
                  </div>
                </div>

                <button onClick={() => dispatch(addCarts(_id))} className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 mt-4 rounded-3xl shadow-md">Add to Cart</button>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 mt-2 rounded-3xl shadow-md">Buy Now</button>
              </div>
            </div>
          </div>




        </div>
      </div>



      <div className="container rounded-sm p-3 mt-4">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2> {/* Related Products Section */}
        <div className="grid grid-cols-5 gap-6 pb-3">
          {relatedProducts?.map((product) => (
            <div
              key={product._id}
              onClick={() => {
                navigate(`/onedata/${product._id}`);
                window.scrollTo(0, 0);
              }}
              className="bg-white shadow-md p-2 w-72 h-[100%] min-w-[270px]"
            >

              <img
                src={`http://localhost:5000/${product.image[0]}`}
                alt={product.productName}
                className="w-full h-48 object-contain  mb-4"
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
              <p className="text-gray-800 font-medium mb-2">
                ₹ {product.price}{' '} M.R.P: ₹
                <span className="line-through text-gray-500">   {product.reducedMRP}</span>
              </p>
              <p className="text-gray-600 mb-4 font-semibold"> {product.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container rounded-sm p-3 mt-4">
        <h2 className="text-2xl font-bold mb-4">Other Products</h2> {/* Other Products Section */}
        <div className="grid grid-cols-5 gap-6 pb-3">
          {otherProducts?.map((product) => (
            <div
              key={product._id}
              onClick={() => {
                navigate(`/onedata/${product._id}`);
                window.scrollTo(0, 0);
              }}
              className="bg-white shadow-md p-2 w-72 h-[100%] min-w-[270px]"
            >
              {/* ... (product card JSX - same as before) */}
              <img
                src={`http://localhost:5000/${product.image[0]}`}
                alt={product.productName}
                className="w-full h-48 object-contain  mb-4"
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
              <p className="text-gray-800 font-medium mb-2">
                ₹ {product.price}{' '} M.R.P: ₹
                <span className="line-through text-gray-500">   {product.reducedMRP}</span>
              </p>
              <p className="text-gray-600 mb-4 font-semibold"> {product.description}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Product;