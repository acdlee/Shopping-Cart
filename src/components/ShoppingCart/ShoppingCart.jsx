import { use, useState } from "react";
import CartContext from "../../store/CartContextProvider";
import styles from "./ShoppingCart.module.css";
import { FaShoppingCart } from "react-icons/fa";

function ShoppingCart() {
    const [showCart, setShowCart] = useState(false);
    const {cart, dispatch, cartCxtValue} = use(CartContext);

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
                            cart.map(item => (
                                <li key={item.id}>
                                    <span className={styles.span}>{item.name}</span>
                                    <button
                                        className={styles.quantityBtn}
                                    >
                                        -
                                    </button>
                                    <span className={styles.quantitySpan}>{item.quantity}</span>
                                    <button
                                        className={styles.quantityBtn}
                                    >
                                        +
                                    </button>
                                    <span className={styles.span}>${(item.price * item.quantity).toFixed(2)}</span>
                                    <button
                                        className={styles.removeBtn}
                                        onClick={() => dispatch({
                                            type: "REMOVE_ITEM",
                                            payload: {...item},
                                        })
                                    }>
                                            Remove
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                    <p className={styles.total}>Total: ${cartCxtValue.calculateTotal().toFixed(2)}</p>
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