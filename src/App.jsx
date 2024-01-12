import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { cartReducer, initialState } from './cartReducer';

export const CartContext = React.createContext(null);

const App = () => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <Router>
            <CartContext.Provider value={{ state, dispatch }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </CartContext.Provider>
        </Router>
    );
};

export default App;
