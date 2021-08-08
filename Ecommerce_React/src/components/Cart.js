import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMinus,
  faPlus,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, ListGroup } from "react-bootstrap";
import {
  cartHeaderTitle,
  noCartItemsMessage,
  cartActions,
  priceTitle,
} from "../Constants";
import "../styles/Cart.css";

function Cart(props) {
  const { cartItems, updateCartItems, iconColor } = props;
  const [showCartItems, setShowCartItems] = useState(false);

  let handleClose = () => setShowCartItems(false);

  let handleShow = () => setShowCartItems(true);

  return (
    <div className="cart-wrapper">
      <div className="cart-info-icon">
        <FontAwesomeIcon
          icon={faShoppingCart}
          size={"2x"}
          color={iconColor || "#ffffff"}
          onClick={handleShow}
        />
        <span>
          <b>{cartItems.length}</b>
        </span>
      </div>
      <Modal show={showCartItems} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{cartHeaderTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length ? (
            <ListGroup>
              {cartItems.map((item, index) => (
                <ListGroup.Item>
                  <div className="cart-item-image">
                    <img src={item.image} />
                  </div>
                  <span>
                    <b>{item.title}</b>
                  </span>
                  <br />
                  <span>
                    <b>
                      {priceTitle}: ${item.price * item.quantity}
                    </b>
                  </span>
                  <div className="cart-item-product-count">
                    <Button
                      variant="primary"
                      onClick={() =>
                        updateCartItems(index, cartActions.addItem)
                      }
                    >
                      <FontAwesomeIcon
                        icon={faPlus}
                        size={"x"}
                        color={"#ffffff"}
                      />
                    </Button>
                    <span>
                      <b>{item.quantity || 0}</b>
                    </span>
                    <Button
                      variant="danger"
                      onClick={() =>
                        updateCartItems(index, cartActions.subtractItem)
                      }
                    >
                      <FontAwesomeIcon
                        icon={faMinus}
                        size={"x"}
                        color={"#ffffff"}
                      />
                    </Button>
                    <Button
                      className="remove-cart-item-button"
                      variant="secondary"
                      onClick={() =>
                        updateCartItems(index, cartActions.deleteItem)
                      }
                    >
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        size={"x"}
                        color={"#ffffff"}
                      />
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <span>
              <b>{noCartItemsMessage}</b>
            </span>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cart;
