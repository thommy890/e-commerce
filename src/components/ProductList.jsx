import React from 'react';
import Product from './Product';

const products = [
    { id: 1, name: 'BBQ Ribs', price: 15.99, image: '/baby-back-ribs.jpg' },
    { id: 2, name: 'Grilled Chicken', price: 12.99, image: '/grilled-chicken.jpg' },
    { id: 3, name: 'Pulled Pork', price: 14.99, image: '/pulled-pork.jpg' },
    { id: 4, name: 'Magic Mushrooms', price: 499.99, image: '/magic-mushrooms.webp' },
];

const ProductList = ({ onAddToCart }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map(product => (
                <Product key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
};

export default ProductList;
