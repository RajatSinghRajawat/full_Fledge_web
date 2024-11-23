import React, { useEffect, useState } from 'react';
import Nav from '../../navigation/Nav';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import './product.css'
import { getProduct } from '../../actions/productActions';

const AllProducts = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const dispatch = useDispatch()

  const { value } = useSelector((state) => {
    // console.log('hello')
    return state.MYproduct
  })
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

      <div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 bg-blue-200 h-auto lg:h-[90vh] p-6">
          <div className="lg:m-24 m-8 flex flex-col justify-center">

            <div className="mb-4">
              <button className="bg-gradient-to-r from-indigo-800 to-blue-600 text-white rounded-sm px-4 py-2 shadow-lg">
                Weekend Discount
              </button>
            </div>

            <div className="mb-4">
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                Shopping With Us For <br /> Better Quality and the <br /> Best Price
              </h1>
            </div>
            <div className="mb-6">
              <p className="text-base lg:text-lg font-medium text-gray-800">
                We have prepaid special discounts for you on grocery products. <br />
                Don't miss this opportunity!
              </p>
            </div>
            <div className="flex items-center mt-4 space-x-4">
              <button type="button" className="btn btn-info">
                Shop Now
              </button>
              <h2 className="text-2xl font-bold text-green-600">$21</h2>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              className="max-w-full h-auto rounded-md shadow-lg"
              src="https://images.macrumors.com/article-new/2023/10/iPhone-16-Cameras-Feature-1.jpg"
              alt="Discount Products"
            />
          </div>
        </div>

      </div>
      <div className="container rounded-sm  p-3 mt-4 bg-orange-400 m-5  w-auto">
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

      <div className="container mx-auto p-2 mt-4 bg-orange-400">
        <h2 className="text-2xl font-bold mb-4">Blockbuster deals with exchange</h2>
        <div className="flex gap-6 scroll pb-3">
          {value.products
            ?.filter((product) => product.price <= 299)
            .map((product) => (
              <div
                key={product._id}
                onClick={() => navigate(`onedata/${product._id}`)}
                className="bg-white shadow-md p-2 w-72 h-[100%] min-w-[300px]"
              >
                <img
                  src={`http://localhost:5000/${product.image[0]}`}
                  alt={product.productName}
                  className="w-full h-48 object-cover mb-4"
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
                <p className="text-gray-800 font-medium mb-2">
                  ₹ {product.price}{' '} M.R.P: ₹
                  <span className="line-through text-gray-500">{product.reducedMRP}</span>
                </p>
                <p className="text-gray-600 mb-4 font-semibold">{product.description}</p>
              </div>
            ))}
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




    </>
  );
};

export default AllProducts;
