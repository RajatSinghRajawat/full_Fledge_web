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

          {/* Right Side Product Cards */}
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
              <p className="mt-4 text-center">No products found for "{keyword}".</p>
            )}
          </div>
        </div>
      </div>






    </div>
  );
};

export default ProductsSearch;
