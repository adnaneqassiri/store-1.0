import { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../CartContext";
import { products } from "../products";

export default function ProductDetails() {
    let { id } = useParams();
    let [quantity, setQuantity] = useState(1);
    const cart = useContext(CartContext);

    function handleAddition() {
        setQuantity((p) => p + 1);
    }
    function handleSubtraction() {
        setQuantity((p) => (p <= 1 ? 1 : p - 1));
    }
    const product = products.find((el) => el.id == id);

    return (
        <div className="product-details">
            <div className="container">
                <Link className="back" to="/">
                    <FontAwesomeIcon icon={faAngleLeft} className="left" /> Back
                </Link>
                <div className="product">
                    <div className="section-1">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="section-2">
                        <h2>{product.title}</h2>
                        <h3>${product.price}</h3>
                        <h4>
                            <span>Category : </span>
                            {product.category}
                        </h4>
                        <p>{product.description}</p>
                        <div className="counter">
                            <span onClick={handleAddition}>+</span>
                            <p>{quantity}</p>
                            <span onClick={handleSubtraction}>-</span>
                        </div>
                        <button
                            onClick={() => {
                                cart.addOneToCart(id, quantity);
                                console.log(cart.items);
                            }}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
