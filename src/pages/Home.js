import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    const contentRef = useRef(null);
    const [index, setIndex] = useState(1);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setData(json));
    }, []);
    console.log(data);
    let slides = [
        {
            url: "https://img.freepik.com/free-photo/full-shot-woman-sitting-chair_23-2149220652.jpg?size=626&ext=jpg",
        },
        {
            url: "https://img.freepik.com/free-photo/studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look_273443-10.jpg?size=626&ext=jpg",
        },
        {
            url: "https://img.freepik.com/free-photo/side-view-woman-with-shopping-bags-putting-credit-card-her-pocket_23-2148684476.jpg?size=626&ext=jpg",
        },
        {
            url: "https://img.freepik.com/free-photo/full-shot-man-running-with-shopping-bags_23-2149220643.jpg?w=740&t=st=1687107075~exp=1687107675~hmac=470f990a8d9f0527fb652acc3f4c70db9e09a370772e40962e3c0afdd5a66204",
        },
    ];
    useEffect(() => {
        const handleSwitch = () => {
            setIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        };
        const interval = setInterval(handleSwitch, 6000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.backgroundImage = `url(${slides[index].url})`;
        }
    }, [index]);

    const handleLeftClick = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const handleRightClick = () => {
        setIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="home">
            <div className="container">
                <h2>
                    Discover, <span>Shop</span>, Enjoy - Your{" "}
                    <span>Premier</span> Online Store Experience<span>!</span>
                </h2>
                <div ref={contentRef} className="content">
                    <FontAwesomeIcon
                        onClick={handleLeftClick}
                        icon={faAngleLeft}
                        className="left"
                    />
                    <FontAwesomeIcon
                        onClick={handleRightClick}
                        icon={faAngleRight}
                        className="right"
                    />
                </div>
                <div className="popular-collection">
                    <h2 className="">Popular Collection</h2>
                    <div className="cards">
                        {data
                            .filter(
                                (el) =>
                                    el.category === "men's clothing" ||
                                    el.category === "women's clothing"
                            )
                            .map((el) => {
                                return (
                                    <Link to={`/products/${el.id}`} key={el.id}>
                                        <div className="card">
                                            <img src={el.image} alt="" />
                                            <h2>{el.title}</h2>
                                            <p>${el.price}</p>
                                        </div>
                                    </Link>
                                );
                            })}
                    </div>
                    {/* <div className="cards">
                        <div className="card">
                            <img
                                src="https://www.ikea.com/ma/en/images/products/ekedalen-extendable-table-oak__0736964_pe740828_s5.jpg?f=xl"
                                alt="table"
                            />
                            <h2>EKEDALEN</h2>
                            <p>Extendable table, oak,</p>
                        </div>
                        <div className="card">
                            <img
                                src="https://www.ikea.com/ma/en/images/products/ekedalen-extendable-table-oak__0872535_pe640523_s5.jpg?f=xxs"
                                alt="table"
                            />
                            <h2>EKEDALEN</h2>
                            <p>Extendable table, oak,</p>
                        </div>
                        <div className="card">
                            <img
                                src="https://www.ikea.com/ma/en/images/products/norden-gateleg-table-white__0737112_pe740886_s5.jpg?f=xxs"
                                alt="table"
                            />
                            <h2>NORDEN</h2>
                            <p>Gateleg table, white,</p>
                        </div>
                        <div className="card">
                            <img
                                src="https://www.ikea.com/ext/ingkadam/m/312b17983c022e3c/original/PH178885-crop001.jpg?f=xs"
                                alt="table"
                            />
                            <h2>EKEDALEN</h2>
                            <p>Extendable table, oak,</p>
                        </div>
                        <div className="card">
                            <img
                                src="https://www.ikea.com/ext/ingkadam/m/547acba4c4092d79/original/PH178884.jpg?f=xs"
                                alt="table"
                            />
                            <h2>BERGMUND</h2>
                            <p>Chair with long cover,</p>
                        </div>
                        <div className="card">
                            <img
                                src="https://www.ikea.com/ma/en/images/products/bergmund-chair-with-long-cover-white-kolboda-beige-dark-grey__1053000_pe846636_s5.jpg?f=xxs"
                                alt="table"
                            />
                            <h2>BERGMUND</h2>
                            <p>Chair with long cover,</p>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}
