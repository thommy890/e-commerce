import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = ({ cartItems, totalPrice, onIncrement, onDecrement }) => {
    let navigate = useNavigate();

    const handlePlaceOrder = () => {
        navigate('/cart'); // Redirect to the Cart page for checkout
    };

    return (
        <div className="sticky top-0 p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-lg font-semibold mb-4 text-gray-900">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty</p>
            ) : (
                <div className="flex flex-col justify-between h-full">
                    <div className="overflow-y-auto">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex justify-between items-center mb-4">
                                <p className="text-gray-700">{item.name} - ${item.price.toFixed(2)} x {item.quantity}</p>
                                <div className="flex items-center">
                                    <button onClick={() => onDecrement(item.id)} className="text-white bg-gray-500 hover:bg-red-600 rounded-lg text-lg p-1 px-5">-</button>
                                    <button onClick={() => onIncrement(item.id)} className="text-white bg-gray-500 hover:bg-blue-600 rounded-lg text-lg p-1 px-5">+</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <p className="text-gray-800 font-semibold">Total Price: ${totalPrice.toFixed(2)}</p>
                        <button onClick={handlePlaceOrder} className="w-full bg-green-600 text-white rounded hover:bg-green-700 p-2 mt-4">Place Order</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;
