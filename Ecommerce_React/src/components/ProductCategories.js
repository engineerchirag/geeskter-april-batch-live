import React from "react";
import {productCategories} from "../Constants";
import "../styles/ProductCategories.css";

function ProductCategories(props) {
  return (
    <div className="product-category">
      {productCategories.map((category, index) => (
        <span key={index}>
          <img src={category.imageUrl} />
          <b>{category.name}</b>
        </span>
      ))}
    </div>
  );
}

export default ProductCategories;
