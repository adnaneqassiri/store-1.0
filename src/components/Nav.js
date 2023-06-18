import logo from "../imgs/logo-1.png";
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
    const [show, setShow] = useState(false);
    function handleClick() {
        setShow((pValue) => !pValue);
    }
    return (
        <div className="nav">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="" />
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
                            <FontAwesomeIcon icon={faCartShopping} />
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
                            ? { color: "#fff", fontSize: "24px" }
                            : { color: "#000" }
                    }
                    onClick={handleClick}
                >
                    {show ? (
                        <FontAwesomeIcon icon={faXmark} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} />
                    )}
                </div>
            </div>
        </div>
    );
}
