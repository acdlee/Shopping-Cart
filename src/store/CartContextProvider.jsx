import { useReducer, createContext } from "react";
import { cartReducer, initialState } from "./../reducers/CartReducer.js";

const CartContext = createContext({
    calculateTotal: () => {},
});

export function CartContextProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, initialState);

    const calculateTotal = () => cart.reduce( 
        (accumulator, item) => (accumulator + item.price * item.quantity),
        0
    );

    const cartCxtValue = {
        calculateTotal,
    };

    return (
        <CartContext.Provider value={{ cart, dispatch, cartCxtValue }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext;