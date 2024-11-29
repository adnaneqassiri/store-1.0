import { products } from "../products";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Products() {
  const [data] = useState(products);
  return (
    <>
      <div className="products">
        <div className="cards">
          {data.map((el) => {
            return (
              <Link to={`/products/${el.id}`} key={el.id}>
                <div className="car-d">
                  <img src={el.image} alt="" />
                  <h2>{el.title}</h2>
                  <p>${el.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
