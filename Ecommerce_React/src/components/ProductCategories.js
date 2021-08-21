import React from "react";
import { productCategories } from "../Constants";
import { Link } from "react-router-dom";
import "../styles/ProductCategories.css";

function ProductCategories(props) {
  return (
    <div className="product-category">
      {productCategories.map((category, index) => (
        <Link to={`category/${category.name.toLowerCase()}`} key={index}>
          <span>
            <img src={category.imageUrl} />
            <b>{category.name}</b>
          </span>
        </Link>
      ))}
    </div>
  );
}

export default ProductCategories;
