import React, { useEffect, useState } from "react";
import Nav from "../../navigation/Nav";
import { useDispatch } from "react-redux";
import { getProduct } from "../../actions/productActions";
import { useParams } from "react-router-dom";

const ProductsSearch = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams(); // Get the search keyword from the URL
  const [products, setProducts] = useState([]);

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
      <div className="container mx-auto mt-4">
        <div className="row">
          {/* Left Side Filters */}
          <div className="col-3">
            <div className="border p-3 rounded shadow-sm">
              <h5 className="fw-bold mb-3">Delivery Day</h5>
              <div>
                <input type="checkbox" id="getTomorrow" />
                <label htmlFor="getTomorrow" className="ms-2">
                  Get it by Tomorrow
                </label>
              </div>
              <div className="mt-2">
                <input type="checkbox" id="get2Days" />
                <label htmlFor="get2Days" className="ms-2">
                  Get it in 2 Days
                </label>
              </div>

              <h5 className="fw-bold mt-4 mb-3">Brands</h5>
              <div>
                <input type="checkbox" id="apple" />
                <label htmlFor="apple" className="ms-2">Apple</label>
              </div>
              <div>
                <input type="checkbox" id="samsung" />
                <label htmlFor="samsung" className="ms-2">Samsung</label>
              </div>
              <div>
                <input type="checkbox" id="samsung" />
                <label htmlFor="samsung" className="ms-2">Samsung</label>
              </div>
              <div>
                <input type="checkbox" id="samsung" />
                <label htmlFor="samsung" className="ms-2">Samsung</label>
              </div>
              <div>
                <input type="checkbox" id="samsung" />
                <label htmlFor="samsung" className="ms-2">Samsung</label>
              </div>

              <h5 className="fw-bold mt-4 mb-3">Price</h5>
              <div className="d-flex align-items-center">
                <input
                  type="range"
                  className="form-range me-2"
                  min="0"
                  max="200000"
                />
                <span>₹57,900 – ₹1,21,100+</span>
              </div>
            </div>
          </div>
          <div className="col-9">
            {products.length > 0 ? (
              <div className="row">
                {products.map((product) => (
                  <div key={product.id} className="col-12 mb-4">
                    <div
                      className="d-flex border p-3 rounded  align-items-center"
                      style={{ minHeight: "180px" }}
                    >
                      <div
                        className="d-flex justify-content-center p-4 align-items-center me-4"
                        style={{
                          width: "280px",
                          height: "280px",
                          backgroundColor: "#f8f9fa",
                          borderRadius: "16px",
                          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <img
                          src={`http://localhost:5000/${product.image[0]}`}
                          alt={product.productName}
                          style={{
                            Width: "10px",
                            height: "200px",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                      {/* Text Section */}
                      <div>
                        <h4 className="mb-2 fw-bold">{product.productName}</h4>
                        <p
                          className="text-muted mb-2"
                          style={{ fontSize: "16px", maxWidth: "600px" }}
                        >
                          {product.description}
                        </p>

                        <div className="flex items-center">
                          <div className="bg-red-600 text-white text-xs font-semibold py-1 px-2 rounded">
                            {product.discount}% off
                          </div>
                          <div className="ml-2 text-red-600 text-sm font-bold">

                            <p className="text-gray-800 font-medium mb-2">
                              ₹ {product.price}{' '} M.R.P: ₹
                              <span className="line-through  text-xs text-gray-500">   {product.reducedMRP}</span>
                            </p>
                          </div>
                        </div>
                        <button className="btn btn-warning btn-sm mt-3 rounded-full text-white">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/product-is-empty-illustration-download-in-svg-png-gif-file-formats--no-records-list-record-emply-data-user-interface-pack-design-development-illustrations-6430781.png?f=webp"
                  alt=""
                  className="img-fluid"
                />
                <p className="mt-4 text-center">No products found for "{keyword}".</p>
              </div>

            )}
          </div>
        </div>
      </div>







      <div className="container">
        <div className="row">
          <div className="col-lg-2 ms-1 shadow-sm h-full">
            <div>
              <h1 className="text-lg font-bold">Delivery Day</h1>
              <div className="flex align-middle">
                <input className="w-5 h-4" type="checkbox" />
                <h4 className="text-base ps-2 font-semibold">Get It by Tomorrow</h4>
              </div>
              <div className="flex align-middle ">
                {/* <input type="checkbox" /> */}
                <input className="w-5 h-4" type="checkbox" />

                <h4 className="text-base ps-2 font-semibold">Get It by Tomorrow</h4>
              </div>
            </div>
            <div className="mt-3">
              <h1 className="text-base font-bold pb-2">Cellular Phone Memory Storage <br /> Capacity</h1>
              <div className="flex align-middle">
                <input className="w-5 h-4" type="checkbox" />
                <h4 className="text-base ps-2 font-semibold">128 GB</h4>
              </div>
              <div className="flex align-middle ">
                {/* <input type="checkbox" /> */}
                <input className="w-5 h-4" type="checkbox" />

                <h4 className="text-base ps-2 font-semibold">128 GB</h4>
              </div>
              <div className="flex align-middle ">
                {/* <input type="checkbox" /> */}
                <input className="w-5 h-4" type="checkbox" />

                <h4 className="text-base ps-2 font-semibold">128 GB</h4>
              </div>
            </div>
            <div className="mt-3">
              <h1 className="text-base font-bold pb-2">Brands</h1>
              <div className="flex align-middle">
                <input className="w-5 h-4" type="checkbox" />
                <h4 className="text-base ps-2 font-semibold">Samsung</h4>
              </div>
              <div className="flex align-middle ">
                <input className="w-5 h-4" type="checkbox" />

                <h4 className="text-base ps-2 font-semibold">OnePlus</h4>
              </div>
              <div className="flex align-middle ">
                <input className="w-5 h-4" type="checkbox" />

                <h4 className="text-base ps-2 font-semibold">IQOO</h4>
              </div>
              <div className="flex align-middle ">
                <input className="w-5 h-4" type="checkbox" />

                <h4 className="text-base ps-2 font-semibold">Apple</h4>
              </div>
              <div className="flex align-middle ">
                <input className="w-5 h-4" type="checkbox" />

                <h4 className="text-base ps-2 font-semibold">LAVA</h4>
              </div>
            </div>
            <div className="mt-3">
              <h1 className="text-base font-bold pb-2">Category</h1>
              <div>
                <h4 className="text-base ">Smartphones & Basic Mobiles
                  Smartphones</h4>
              </div>

            </div>
            <div className="mt-3">
              <h1 className="text-base font-bold pb-2">Price</h1>

              <div className="d-flex align-items-center">
                <span className="text-xs pe-1">₹57,900</span>

                <input
                  type="range"
                  className="form-range me-2 w-full"
                  min="0"
                  max="200000"
                />
                <span className="text-xs ps-1">₹1,21,100+</span>
              </div>
            </div>
            <div className="mt-3">
              <h1 className="text-base font-bold pb-2">Deals & Discounts</h1>
              <div>
                <h4 className="text-base ">All Discounts</h4>
                <h4 className="text-base ">Today's Deals</h4>

              </div>

            </div>
            <div className="mt-3">
              <h1 className="text-base font-bold pb-2">Discounts</h1>
              <div>
                <h4 className="text-base ">10% Off or more</h4>
                <h4 className="text-base ">10% Off or more</h4>
                <h4 className="text-base ">10% Off or more</h4>
                <h4 className="text-base ">10% Off or more</h4>
                <h4 className="text-base ">10% Off or more</h4>
                <h4 className="text-base ">10% Off or more</h4>

              </div>

            </div>
          </div>
          <div className="col-lg-8 ms-1 h-full">

            <div className="flex ">

              <div className="bg-sky-200 p-5">
                <img className="w-[290px] h-[200px]" src="https://m.media-amazon.com/images/I/61sU8OqBs4L._AC_UY327_FMwebp_QL65_.jpg" alt="" />
              </div>
              <div className="ps-2">
                <h2>Samsung Galaxy S25 Ultra 5G AI Smartphone (Titanium Silverblue, 12GB RAM, 512GB Storage), 200MP Camera, S Pen Included, Long Battery Life</h2>

                <p className="text-gray-800  font-medium mb-2 pt-3">
                  <span className="text-2xl font-bold"> <span class="text-sm font-light pb-5"><sup>₹ </sup> </span>4999</span> M.R.P: 
                  <span className="line-through  text-xs text-gray-500"> 6000</span> <br />
                  <span>(8% off)</span>
                </p>
                <p>Pre-book now for ₹4,999</p>
                <p className="text-xs pt-1">Available to buy tomorrow at 12:00 AM</p>

                <button className="btn rounded-full mt-3 border border-2 bg-transparent ">See Options</button>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default ProductsSearch;
