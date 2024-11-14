import React from 'react';

const products = [
  {
    id: 1,
    name: 'Samsung Galaxy S23 Ultra 5G',
    image: 'https://static1.pocketlintimages.com/wordpress/wp-content/uploads/wm/2023/09/apple-iphone-15-pro-4.jpg', // Replace with actual image URL
    price: '₹75,999',
    originalPrice: '₹1,49,999',
    discount: '49% off',
    description: 'Galaxy S23 Ultra 5G AI Smart',
    exchange: 'Great Indian Festival',
  },
  {
    id: 2,
    name: 'Apple iPhone 13 (128GB)',
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/i-phone-15-pro-phone-in-hand-at-apple-event.jpg?c=16x9', // Replace with actual image URL
    price: '₹43,999',
    originalPrice: '₹59,900',
    discount: '27% off',
    description: 'Starlight',
    exchange: 'Great Indian Festival',
  },
  {
    id: 3,
    name: 'iQOO Z9s 5G',
    image: 'path_to_image3', // Replace with actual image URL
    price: '₹19,998',
    originalPrice: '₹25,999',
    discount: '23% off',
    description: 'Onyx Green, 8GB RAM',
    exchange: 'Great Indian Festival',
  },
  {
    id: 4,
    name: 'Apple MacBook Air',
    image: 'path_to_image4', // Replace with actual image URL
    price: '₹59,990',
    originalPrice: '₹92,900',
    discount: '35% off',
    description: 'Apple M1 Chip',
    exchange: 'Great Indian Festival',
  },
  {
    id: 5,
    name: 'Samsung Galaxy M15 5G',
    image: 'path_to_image5', // Replace with actual image URL
    price: '₹11,999',
    originalPrice: '₹16,999',
    discount: '29% off',
    description: '6000 mAh Battery',
    exchange: 'Great Indian Festival',
  },
  {
    id: 5,
    name: 'Samsung Galaxy M15 5G',
    image: 'path_to_image5', // Replace with actual image URL
    price: '₹11,999',
    originalPrice: '₹16,999',
    discount: '29% off',
    description: '6000 mAh Battery',
    exchange: 'Great Indian Festival',
  },
];

const Carousel = () => {
  return (
    <div className="container mx-auto p-6 bg-orange-500">
      <h2 className="text-2xl font-bold mb-4">Blockbuster deals with exchange</h2>
      <div className=" flex gap-6 overflow-x-auto whitespace-nowrap pb-3"         style={{
          scrollbarWidth: 'thin', /* For Firefox */
          scrollbarColor: '#4f46e5 #f3f4f6', 
        }}
>
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-blue-50 rounded-lg shadow-md p-4 w-72 h-[100%] min-w-[300px]" // Set fixed width and background color
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-800 font-medium mb-2">
              {product.price}{' '}
              <span className="line-through text-gray-500">{product.originalPrice}</span>
            </p>
            <p className="text-gray-600 mb-4 font-semibold">{product.exchange}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
