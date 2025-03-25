import { use, useState } from "react";
import CartContext from "../../store/CartContextProvider";
import styles from "./ShoppingCart.module.css";
import { FaShoppingCart } from "react-icons/fa";

function ShoppingCart() {
    const [showCart, setShowCart] = useState(false);
    const cartCtx = use(CartContext);

    const handleCartBtn = () => setShowCart(prevCart => !prevCart);

    return (
        <aside className={styles.aside + (showCart ? "" : styles.bgStyle)}>
            {showCart ? 
                <div>
                    <h3>Shopping Cart</h3>
                    <button 
                        className={styles.cartButton}
                        onClick={handleCartBtn}>Close</button>
                    <ul>
                        {
                            cartCtx.cartItems.map(item => (
                                <li key={item.id}>
                                    <span>{item.name}</span>
                                    <span>Quantity: {item.quantity}</span>
                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                    <button
                                        className={styles.removeBtn}
                                        onClick={() => cartCtx.removeItem(item)}>
                                            Remove
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                    <p className={styles.total}>Total: ${cartCtx.calculateTotal().toFixed(2)}</p>
                </div>
            : 
                <FaShoppingCart
                    className={styles.cartIcon}
                    size="2em"
                    onClick={handleCartBtn} 
                />
            }
        </aside>
    );
}

export default ShoppingCart;