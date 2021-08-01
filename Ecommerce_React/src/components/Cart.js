import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../styles/Cart.css";

function Cart(props) {
  return (
    <div className="cart-wrapper">
      <FontAwesomeIcon icon={faShoppingCart} size={"2x"} color={"#ffffff"} />
      <span>
        <b>5</b>
      </span>
    </div>
  );
}

export default Cart;
