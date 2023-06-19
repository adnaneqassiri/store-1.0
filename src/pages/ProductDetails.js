import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function ProductDetails() {
    let { id } = useParams();
    let [result, setResult] = useState(1);
    let [localData, setLocalData] = useState(
        localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : []
    );
    function handleClick() {
        setLocalData((p) => [...p, { id: id, result }]);
        localStorage.setItem("cart", JSON.stringify(localData));
        console.log(localStorage.getItem("cart"));
    }
    function handleAddition() {
        setResult((p) => p + 1);
    }
    function handleSubtraction() {
        setResult((p) => (p <= 1 ? 1 : p - 1));
    }
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((json) => setProduct(json));
    }, [id]);
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
                            <p>{result}</p>
                            <span onClick={handleSubtraction}>-</span>
                        </div>
                        <button onClick={handleClick}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
