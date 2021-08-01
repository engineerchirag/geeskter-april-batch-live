import React, { useState, useEffect } from "react";
import { productsListHeaderTitle } from "../Constants";
import getAllProducts from "../helperFunctions/getAllProducts";
import "../styles/ProductsList.css";

function ProductsList(props) {
  const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     getAllProducts().then((products) => setProducts(products));
  //   }, []);

  return (
    <div className="products-list-container">
      <span>
        <b>{productsListHeaderTitle}</b>
        <hr />
      </span>
      <div className="products-list"></div>
    </div>
  );
}

export default ProductsList;
