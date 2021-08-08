import React, { Fragment, useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import getProductCategory from "../helperFunctions/getProductCategory";
import ProductsList from "./ProductsList";
import { goBackText, errorMessage } from "../Constants";
import AppContext from "./Context";
import Cart from "./Cart";
import "../styles/Category.css";

function Category(props) {
  const { cartItems, updateCartItems, addProductsToCart } =
    useContext(AppContext);
  const { categrory } = useParams();
  const [productCategoryItems, setProductCategoryItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getProductCategory(categrory)
      .then((data) => setProductCategoryItems(data))
      .catch((error) => setError(true));
  }, []);

  return (
    <Fragment>
      <div className="category-header">
        <Link to="/">
          <Button className="category-header-button" variant="primary">
            {goBackText}
          </Button>
        </Link>
        <Cart
          cartItems={cartItems}
          updateCartItems={updateCartItems}
          iconColor={"#0b5ed7"}
        />
      </div>
      {productCategoryItems.length ? (
        <ProductsList
          products={productCategoryItems}
          addProductsToCart={addProductsToCart}
        />
      ) : (
        error && (
          <Fragment>
            <hr />
            <h5>{errorMessage}</h5>
          </Fragment>
        )
      )}
    </Fragment>
  );
}

export default Category;
