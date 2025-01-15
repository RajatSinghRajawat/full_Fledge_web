import React, { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';

const ProductSection = () => {
  const [selectedImage, setSelectedImage] = useState('/path-to-your-image.jpg');


  const images = [
    'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-color-lineup-geo-230912_big.jpg.large.jpg',
    'https://i.ytimg.com/vi/IaihXkP8nrU/maxresdefault.jpg',
    'https://cdn.mos.cms.futurecdn.net/zCZzShp8mTfwQ6qTbNNATk-1200-80.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjBS474lPZzl00rHA4DE1Lyi2aQ4Wdu-OlKAPGlZE4xxfMR-N2iD5odKq7gh7GOH-V8I&usqp=CAU',
  ];


  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row">
      {/* Left Section: Image Gallery */}
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        {/* Main Image with Fixed Height */}
        <div className="w-full p-4 h-96">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'Product Image',
                isFluidWidth: true,
                src: selectedImage,
                sizes: "(max-width: 768px) 100vw, 50vw",
              },
              largeImage: {
                src: selectedImage,
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

        {/* Thumbnails */}
        <div className="flex space-x-2 overflow-x-auto mt-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-20 h-20 object-cover cursor-pointer ${
                selectedImage === img ? 'border-2 border-red-500' : ''
              }`}
              onMouseEnter={() => setSelectedImage(img)} // Hover to change main image
            />
          ))}
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="w-full lg:w-1/2 p-4">
        <span className="bg-yellow-300 text-black px-2 py-1 rounded">
          This Item is Trade Assured
        </span>
        <div className="mt-4">
          <div className="text-2xl font-bold">Blue, Titanium</div>
          <div className="text-lg">Size: Standard</div>
          <div className="text-lg font-semibold">
            Specification: Bluetooth 5.0, Noise-Cancelling
          </div>
          <div className="text-lg mt-2">
            <span className="text-gray-600">Standard Pieces: </span>
            ₹299 / Piece
          </div>
          <div className="text-lg mt-2">
            <span className="line-through text-gray-500">₹100000</span>{' '}
            <span className="text-red-500">Discount: 4500%</span>
          </div>
          <div className="flex items-center mt-4">
            <span>Quantity: </span>
            <div className="flex items-center ml-2">
              <button className="px-2 py-1 bg-gray-300 rounded">-</button>
              <span className="px-4">1</span>
              <button className="px-2 py-1 bg-gray-300 rounded">+</button>
            </div>
          </div>
          <div className="flex space-x-4 mt-6">
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              Add To Cart
            </button>
            <button className="bg-red-700 text-white px-4 py-2 rounded">
              Send Inquiry
            </button>
          </div>
          <div className="mt-6">
            <span className="text-gray-700">Sold by: </span>
            <span className="text-lg font-bold">Tech Store</span>
          </div>
          <div className="mt-2">
            <span className="text-green-500">Verified Seller</span>
            <div>
              Lead Time: <span>2-4 days</span>, Response Rate: <span>95%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
