import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faMagnifyingGlass,
    faXmark,
    faBars,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
    // const [showCart, setShowCart] = useState(true);
    const [show, setShow] = useState(false);
    // const [cartId, setCartId] = useState(
    //     localStorage.getItem("cart")
    //         ? JSON.parse(localStorage.getItem("cart"))
    //         : []
    // );
    // const [cartData, setCartData] = useState(
    //     localStorage.getItem("products")
    //         ? JSON.parse(localStorage.getItem("products"))
    //         : []
    // );
    // console.log(cartData);
    // console.log(cartId);

    // function shopCart() {
    //     setShowCart((p) => !p);
    // }
    function handleClick() {
        setShow((pValue) => !pValue);
    }
    return (
        <div className="nav">
            <div className="container">
                <div className="logo">
                    <Link to="https://adnaneqassiri.com">
                        <span>FIEXX</span>56.
                    </Link>
                </div>
                <div
                    className="links"
                    style={show ? { right: "0px" } : { right: "-300px" }}
                >
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="brand">Brand</NavLink>
                        </li>
                        <li>
                            <NavLink to="shop">Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to="woman">Woman</NavLink>
                        </li>
                        <li>
                            <NavLink to="men">Man</NavLink>
                        </li>
                        <li>
                            <FontAwesomeIcon
                                // onClick={shopCart}
                                icon={faCartShopping}
                            />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </li>
                    </ul>
                </div>

                <div
                    className="mobile"
                    style={
                        show
                            ? { zIndex: 1, color: "#fff", fontSize: "20px" }
                            : { zIndex: 1, color: "#000" }
                    }
                >
                    <FontAwesomeIcon
                        style={{ marginRight: "20px", zIndex: -1 }}
                        // onClick={shopCart}
                        icon={faCartShopping}
                    />

                    {show ? (
                        <FontAwesomeIcon onClick={handleClick} icon={faXmark} />
                    ) : (
                        <FontAwesomeIcon onClick={handleClick} icon={faBars} />
                    )}
                </div>
                {/* <div
                    className="cart"
                    style={{
                        display: showCart ? "flex" : "none",
                    }}
                >
                    <FontAwesomeIcon
                        onClick={() => {
                            setShowCart(false);
                        }}
                        icon={faXmark}
                    />
                    <ul>
                        {cartId.map((el) => {
                            let cartEl = cartData.filter((e) => {
                                return e.id == el.id;
                            })[0];

                            return (
                                <li>
                                    <div className="section-1">
                                        <img src={cartEl.image} alt="" />
                                    </div>
                                    <div className="section-2">
                                        <h2>{cartEl.title}</h2>
                                        <p>{cartEl.price}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div> */}
            </div>
        </div>
    );
}
