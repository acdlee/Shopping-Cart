import { use } from "react";
import { v4 as uuidv4 } from "uuid";
import CartContext from "../../store/CartContextProvider";
import styles from "./Products.module.css";

const DATA = [
    {
        id: uuidv4(),
        name: "Laptop",
        price: 999.99,
    },
    {
        id: uuidv4(),
        name: "Headphones",
        price: 99.99,
    },
    {
        id: uuidv4(),
        name: "Mouse",
        price: 29.99,
    },
];

function Products() {
    const { dispatch } = use(CartContext);

    return (
        <section className={styles.section}>
            <h2>Products</h2>
            <ul>
                {
                    DATA.map(item => (
                        <li key={item.id}>
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                            <button
                                onClick={ () => dispatch(
                                    {
                                        type: "ADD_ITEM", 
                                        payload: {...item},
                                    }
                                )}
                            >
                                Add To Cart
                            </button>
                        </li>
                    ))
                }
            </ul>

        </section>
    );
}

export default Products;