import React, { useContext } from 'react';
import { CartContext } from '../App';

const Cart = () => {
    const { state } = useContext(CartContext);

    const handleCheckout = (event) => {
        event.preventDefault();
        console.log("Processing payment...");
        // Here you would handle the checkout process, such as validating the payment details
        // and processing the payment.
    };

    return (
        <div className="container max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h2>

            {/* Order Summary */}
            {state.cartItems.length > 0 ? (
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Your Order</h3>
                    <ul>
                        {state.cartItems.map(item => (
                            <li key={item.id} className="mb-2">
                                {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                                <span className="font-semibold"> Total: ${(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-lg font-semibold">Total Price: ${state.totalPrice.toFixed(2)}</p>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}

            {/* Payment Form */}
            <div className="max-w-md mx-auto">
                <form onSubmit={handleCheckout} className="mt-8 bg-white p-6 border border-gray-200 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Cardholder Name</label>
                        <input type="text" required className="shadow-sm bg-gray-50 border border-gray-300 p-2 w-full rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Card Number</label>
                        <input type="text" required className="shadow-sm bg-gray-50 border border-gray-300 p-2 w-full rounded-md" />
                    </div>
                    <div className="flex gap-4 mb-4">
                        <div className="flex-1">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Expiration Date</label>
                            <input type="text" placeholder="MM/YY" required className="shadow-sm bg-gray-50 border border-gray-300 p-2 w-full rounded-md" />
                        </div>
                        <div className="flex-1">
                            <label className="block mb-2 text-sm font-medium text-gray-700">CVV</label>
                            <input type="text" maxLength="4" required className="shadow-sm bg-gray-50 border border-gray-300 p-2 w-full rounded-md" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Billing Address</label>
                        <input type="text" required className="shadow-sm bg-gray-50 border border-gray-300 p-2 w-full rounded-md" />
                    </div>
                    <div className="mb-4">
                        <button type="submit" className="bg-blue-600 text-white p-2 rounded-md w-full hover:bg-blue-700">
                            Place Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Cart;
