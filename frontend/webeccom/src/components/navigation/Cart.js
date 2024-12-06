import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const getCart = async () => {
        try {
            const requestOptions = {
                method: "GET",
                redirect: "follow",
            };

            const response = await fetch(
                "http://localhost:5000/getcart?userId=67441031faea89f5e1d847f2&productId=674ecc429d27ca0d242869f5",
                requestOptions
            );
            const result = await response.json();
            console.log(result.cart, "******************** get product ***************");
            setCartProducts(result.cart.Products || []);
            setTotalPrice(result.cart.totalPrice || 0);
        } catch (error) {
            console.error("Error fetching cart:", error);
        }
    };

    const handleUpdateQuantity = (productId) => {
        console.log(`Update quantity for product: ${productId}`);
        // Add logic to update the quantity
    };

    const handleRemoveFromCart = (productId) => {
        console.log(`Remove product from cart: ${productId}`);
        // Add logic to remove the product from the cart
    };

    useEffect(() => {
        getCart();
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>
            {cartProducts.length > 0 ? (
                cartProducts.map((p) => (
                    <div
                        key={p.productId._id}
                        className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4 flex items-center"
                    >
                        <img
                            src={`http://localhost:5000/${p.productId.image[0]}`}
                            alt={p.productId.productName}
                            className="w-12 h-12 object-cover rounded-md mr-4"
                        />
                        <div className="flex flex-1 flex-col">
                            <h2 className="text-lg font-semibold text-gray-800">
                                {p.productId.productName}
                            </h2>
                            <p className="text-sm text-gray-600">Quantity: {p.quantity}</p>
                        </div>
                        <p className="text-sm font-medium text-gray-700 mr-4">
                            ₹{p.productId.price || 'N/A'}
                        </p>
                        <div className="flex gap-2">
                            <button
                                className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
                                onClick={() => handleUpdateQuantity(p.productId._id)}
                            >
                                Update
                            </button>
                            <button
                                className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all"
                                onClick={() => handleRemoveFromCart(p.productId._id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-600">Your cart is empty.</p>
            )}
            <div className="mt-6 text-right">
                <p className="text-lg font-semibold">Total Price: ₹{totalPrice}</p>
            </div>
        </div>
    );
};

export default Cart;
