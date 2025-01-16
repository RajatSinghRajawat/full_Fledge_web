import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarts } from '../actions/productActions';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { value, error } = useSelector((state) => state.Mycart);

    console.log(value, 'cartData');
    console.log(error, 'error');

    // Fetch cart data when the component mounts
    useEffect(() => {
        dispatch(getCarts());
    }, [dispatch]);

    // Recalculate total price whenever the cart data changes
    useEffect(() => {
        if (value?.cart?.Products) {
            const calculatedPrice = value.cart.Products.reduce(
                (total, item) => total + item.productId.price * item.quantity,
                0
            );
            setTotalPrice(calculatedPrice);
        }
    }, [value]);

    // Function to remove a product from the cart
    const remove = (productId) => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch(
            `http://localhost:5000/removeCart?userId=67441031faea89f5e1d847f2&productId=${productId}`,
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                if (result.success) {

                    dispatch(getCarts());
                } else {
                    console.error('Failed to remove product:', result.message);
                }
            })
            .catch((error) => console.error('Error removing product:', error));
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>
            {value?.cart?.Products?.length > 0 ? (
                value.cart.Products.map((p) => (
                    <div
                        key={p.productId._id}
                        onClick={() => navigate(`onedata/${p._id}`)}
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
                                onClick={() => remove(p.productId._id)}
                                className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all"
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

            <button className='mt-5 w-full bg-sky-400 text-base font-semibold p-2 rounded-md'>Place Order</button>

        </div>
    );
};

export default Cart;
