import React, { useContext } from 'react';
import ProductList from '../components/ProductList';
import ShoppingCart from '../components/ShoppingCart';
import { CartContext } from '../App';

const Store = () => {
    const { state, dispatch } = useContext(CartContext);

    const handleIncrement = (id) => {
        dispatch({ type: 'INCREMENT_ITEM', payload: id });
    };

    const handleDecrement = (id) => {
        dispatch({ type: 'DECREMENT_ITEM', payload: id });
    };

    const handleAddToCart = (product) => {
        const existingItem = state.cartItems.find(item => item.id === product.id);
        if (existingItem) {
            // Increment the quantity of the existing item
            dispatch({ type: 'INCREMENT_ITEM', payload: product.id });
        } else {
            // Add a new item with a quantity of 1
            dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity: 1 } });
        }
    };

    const handlePlaceOrder = () => {
        console.log('Order placed:', state.cartItems);
        dispatch({ type: 'RESET_CART' });
    };

    return (
        <div className="flex flex-row justify-center items-start min-h-screen gap-4 p-4">
            <div className="flex-grow">
                <ProductList onAddToCart={handleAddToCart} />
            </div>
            <div className="w-96">
                <ShoppingCart
                    cartItems={state.cartItems}
                    totalPrice={state.totalPrice}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onPlaceOrder={handlePlaceOrder}
                />
            </div>
        </div>
    );
};

export default Store;
