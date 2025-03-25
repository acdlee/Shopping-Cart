import { useState, createContext } from "react";

const CartContext = createContext({
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    calculateTotal: () => {},
});

export function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function addItem(item) {
        // Check if the item is already in the shopping cart
        const itemIndex = cartItems.findIndex(i => i.id == item.id);

        if (itemIndex > -1) {
            // Update quantity
            setCartItems(prevCart => prevCart.map((i, index) => index == itemIndex ? 
                {
                    ...i,
                    quantity: i.quantity + 1,
                } : i
            ))
        } else {
            // Add new item
            setCartItems(prevCart => [
                ...prevCart, 
                {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: 1,
                }
            ]);
        }
    };

    function removeItem(item) {
        // Check if the item is already in the shopping cart
        if (item.quantity > 1) {
            // Update quantity
            setCartItems(prevCart => prevCart.map(i=> i.id == item.id ? 
                {
                    ...i,
                    quantity: i.quantity - 1,
                } : i
            ))
        } else {
            // Remove singleton item
            setCartItems(prevCart => prevCart.filter(i => i.id != item.id));
        }
        
    }

    const calculateTotal = () => cartItems.reduce(
        (accumulator, item) => (accumulator + item.price * item.quantity),
        0
    );

    const shoppingCartCxtValue = {
        cartItems,
        addItem,
        removeItem,
        calculateTotal,
    };

    return (
        <CartContext value={shoppingCartCxtValue}>
            { children }
        </CartContext>
    )
}

export default CartContext;