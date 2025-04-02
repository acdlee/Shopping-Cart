import { use, useState } from "react";
import CartContext from "../../store/CartContextProvider";
import styles from "./ShoppingCart.module.css";
import { FaShoppingCart } from "react-icons/fa";
import CartItem from "./CartItem";

function ShoppingCart() {
    const [showCart, setShowCart] = useState(false);
    const {cart, cartCxtValue} = use(CartContext);

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
                        { cart.length ?
                            cart.map(item => 
                                <CartItem key={item.id} item={item}/>
                            )
                        :
                        <p>Empty!</p>
                        }
                    </ul>
                    <hr />
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