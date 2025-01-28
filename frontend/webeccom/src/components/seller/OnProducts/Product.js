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
  const [id, setid] = useState("");
  const [filterProduct, setfilterProdcut] = useState([])
  const [newFilterProdcut, setnewFilterProdcut] = useState([])

  const dispatch = useDispatch()
  const navigate = useNavigate();


  const { value } = useSelector((state) => {

    return state.MYproduct
  })

  // console.log(value.products)
  // if(id){
  //   let newFilterProdcut = value.products.filter((value)=>{
  //    return  value._id !=id
  //   })
  //   setnewFilterProdcut(newFilterProdcut)

  // }
  // console.log("newFilterProdcut",newFilterProdcut)

  console.log("id", id)


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
          setid(result.all._id);
          console.log("resultwe ", result.all._id)
          setProductData(result.all);
          let newFilterProdcut = value.products.filter((value) => {
            return value._id != id
          })
          setnewFilterProdcut(newFilterProdcut)

        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [userId, id]);

  useEffect(() => {
    dispatch(getProduct(""));
  }, [])


  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  console.log(productData,"asdfads")

  if (!productData) {
    return (
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
    );

  }

  // setTimeout(() => {
  //   if (!productData) {
  //     return (
  //       <div className="text-center h-[100vh] w-[100vw] flex items-center justify-center bg-black text-white">
  //         <div className="relative flex justify-center items-center">
  //           <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
  //           <img
  //             src={image}
  //             alt="Loading"
  //             className="rounded-full h-28 w-28"
  //           />
  //         </div>
  //       </div>
  //     );
  
  //   }
  // }, 2000);

  const {
    image,
    productName,
    // description,
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

  // console.log(_id,"_id*******************************")




  return (
    <>
      <div>

        <Nav />
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-6 h-[80vh] overflow-hidden">

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
                    <div className="space-y-2">
                      {image?.map((img, index) => (
                        <div
                          key={index}
                          className={`border ${mouseImage === index ? 'border-blue-500' : 'border-gray-300'} 
            rounded-md cursor-pointer p-1`}
                          onMouseEnter={() => setMouseImage(index)}
                        >
                          <img
                            src={`http://localhost:5000/${img}`}
                            alt={`product_img_${index}`}
                            className="w-16 h-16 object-cover rounded-md"
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
                    <div style={{ zIndex: "-1" }} className="w-full p-4 h-96 z-[99999]">
                      <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: 'Product Image',
                            isFluidWidth: true,
                            src: `http://localhost:5000/${image[mouseImage]}`,
                            sizes: "(max-width: 768px) 100vw, 50vw",
                          },
                          largeImage: {
                            src: `http://localhost:5000/${image[mouseImage]}`,
                            width: 1200,
                            height: 1800,
                          },
                          enlargedImageContainerDimensions: {
                            width: '200%',
                            height: '200%',
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Products-container">
                <div className="Products-trade-assurance">
                  <span className="badge bg-warning text-dark">This Item is Trade Assured</span>
                </div>

                <div className="Products-content">
                  <div className="Product-pricings mt-4">
                    <div className="Products-price-box">
                      <p>{size} Pieces</p>
                      <h6>₹ {price} / Piece</h6>
                    </div>
                    <div className="Products-price-box">
                      <p>Original Price: ₹ {reducedMRP}</p>
                      <h6>Discount: {discount}%</h6>
                    </div>
                  </div>

                  <div className="Products-options">
                    <div>
                      <div className="d-flex justify-content-between align-content-center">
                        <div className="Products-option">
                          <span>Color</span> <br />
                          <span className="Products-option-value">{color}</span>
                        </div>
                        <div className="Products-ICONS">
                          <PiGreaterThan />
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between align-content-center">
                        <div className="Products-option">
                          <span>Size</span> <br />
                          <span className="Products-option-value">{size}</span>
                        </div>
                        <div className="Products-ICONS">
                          <PiGreaterThan />
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between align-content-center">
                        <div className="Products-option">
                          <span>Specification</span> <br />
                          <span className="Products-option-value">{specialization}</span>
                        </div>
                        <div className="Products-ICONS">
                          <PiGreaterThan />
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>

                  <div className="Products-quantity-selector">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="">
                        <span>Quantity</span>
                      </div>
                      <div className="d-flex align-items-center shadow-lg p-3 bg-body-tertiary rounded">
                        <button onClick={handleDecrement} className="btn Products-quantity-btn">
                          -
                        </button>
                        <input type="text" value={quantity} readOnly className="Products-quantity-input" />
                        <button onClick={handleIncrement} className="btn Products-quantity-btn">
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="row Products-action-buttons">
                    <div className="col-6">
                      {/* <button className="btn btn-outline-danger w-100">Add To Cart</button> */}
                      <button className="btn btn-outline-danger w-100 rounded-md" onClick={() => { dispatch(addCarts(_id)) }}>Add To Cart</button>
                    </div>
                    <div className="col-6">
                      <button className="btn btn-danger w-100">Buy Now</button>
                    </div>
                  </div>

                  <div className="Product-seller-info">
                    <div className="Product-seller-details">
                      <p>Sold by:</p>
                      <h6>{soldBy}</h6>
                    </div>

                    <div className="Product-seller-status">
                      <span className="badge bg-success">✔ Verified Seller</span>
                      <span className="Product-rating">
                        Lead Time: <strong>{leadTime}</strong> days
                      </span>
                      <span className="Product-rating">
                        Response Rate: <strong>{responseRate}%</strong>
                      </span>
                    </div>

                    <div className="Product-features">
                      <h5>Features</h5>
                      <p>{features}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>



        <div className="container rounded-sm  p-3 mt-4">
          <h2 className="text-2xl font-bold mb-4">Blockbuster deals with exchange</h2>
          <div className=" grid grid-cols-5 gap-6  pb-3"
          >
            {newFilterProdcut?.map((product, index) => (
              <div
                key={product._id}
                onClick={() => {
                  navigate(`/onedata/${product._id}`)
                  window.scrollTo(0, 0)
                }}
                className="bg-white  shadow-md p-2 w-72 h-[100%] min-w-[270px]" // Set fixed width and background color
              >
                <img
                  src={`http://localhost:5000/${product.image[0]}`}
                  alt={product.productName}
                  className="w-full h-48 object-cover  mb-4"
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



      </div>
    </>

  );
};

export default Product;
