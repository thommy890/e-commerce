const initialState = {
    cartItems: [],
    totalPrice: 0,
};

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM': {
            const updatedCart = [...state.cartItems];
            const foundIndex = updatedCart.findIndex(item => item.id === action.payload.id);
            if (foundIndex >= 0) {
                updatedCart[foundIndex].quantity += 1;
            } else {
                updatedCart.push({ ...action.payload, quantity: 1 });
            }
            const newTotalPrice = updatedCart.reduce((total, item) => total + item.price * item.quantity, 0);
            return { cartItems: updatedCart, totalPrice: newTotalPrice };
        }

        case 'INCREMENT_ITEM': {
            const updatedCart = state.cartItems.map(item =>
                item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
            );
            const newTotalPrice = updatedCart.reduce((total, item) => total + item.price * item.quantity, 0);
            return { cartItems: updatedCart, totalPrice: newTotalPrice };
        }

        case 'DECREMENT_ITEM': {
            const updatedCart = state.cartItems.map(item =>
                item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
            ).filter(item => item.quantity > 0); // Remove the item if the quantity is 0
            const newTotalPrice = updatedCart.reduce((total, item) => total + item.price * item.quantity, 0);
            return { cartItems: updatedCart, totalPrice: newTotalPrice };
        }

        case 'REMOVE_ITEM': {
            const itemToRemove = state.cartItems.find(item => item.id === action.payload);
            if (itemToRemove.quantity > 1) {
                return cartReducer(state, { type: 'DECREMENT_ITEM', payload: action.payload });
            } else {
                const updatedCart = state.cartItems.filter(item => item.id !== action.payload);
                const newTotalPrice = updatedCart.reduce((total, item) => total + item.price * item.quantity, 0);
                return { cartItems: updatedCart, totalPrice: newTotalPrice };
            }
        }

        case 'RESET_CART':
            return initialState;

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export { cartReducer, initialState };


