import { use } from "react";
import CartContext from "../../store/CartContextProvider";

import styles from "./CartItem.module.css";

function CartItem({ item }) {
    const { dispatch } = use(CartContext)

    return (
        <li className={styles.li}>
            <p>{item.name}</p>
            <div>
                <button 
                    className={styles.quantityBtn}
                    onClick={() => dispatch({
                        type: "REMOVE_ITEM",
                        payload: {...item},
                    })}
                >
                    -
                </button>
                <span>{item.quantity}</span>
                <button
                    onClick={() => dispatch({
                        type: "ADD_ITEM",
                        payload: {...item},
                    })}
                    className={styles.quantityBtn}
                >
                    +
                </button>
                <button
                    className={styles.removeBtn}
                    onClick={() => dispatch({
                        type: "REMOVE_ITEM",
                        payload: {...item},
                    })
                }>
                    Remove
                </button>
            </div>
            <p>
                ${(item.price * item.quantity).toFixed(2)}
            </p>
        </li>
    );
}

export default CartItem;