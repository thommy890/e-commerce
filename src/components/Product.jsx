import React from 'react';

const Product = ({ product, onAddToCart }) => {
    return (
        <div className="flex flex-col bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-6">
            {product.image && (
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-lg" />
            )}
            <div className="flex flex-col justify-between flex-grow p-4">
                <div>
                    <h5 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{product.name}</h5>
                    <p className="text-md text-gray-700 dark:text-gray-400">Price: ${product.price.toFixed(2)}</p>
                </div>
                <button onClick={() => onAddToCart(product)} className="mt-4 text-lg py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;
