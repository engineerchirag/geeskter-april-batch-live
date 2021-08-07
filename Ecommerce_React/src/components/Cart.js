import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, ListGroup } from "react-bootstrap";
import { cartHeaderTitle, noCartItemsMessage } from "../Constants";
import "../styles/Cart.css";

function Cart(props) {
  const { cartItems } = props;
  const [showCartItems, setShowCartItems] = useState(false);

  let handleClose = () => setShowCartItems(false);

  let handleShow = () => setShowCartItems(true);

  return (
    <div className="cart-wrapper">
      <div className="cart-info-icon">
        <FontAwesomeIcon
          icon={faShoppingCart}
          size={"2x"}
          color={"#ffffff"}
          onClick={handleShow}
        />
        <span>
          <b>{cartItems.length}</b>
        </span>
      </div>
      <Modal show={showCartItems} onHide={handleClose} >
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
                  <div className="cart-item-product-count">
                    <Button variant="primary">
                      <FontAwesomeIcon
                        icon={faPlus}
                        size={"x"}
                        color={"#ffffff"}
                      />
                    </Button>
                    <span>
                      <b>{0}</b>
                    </span>
                    <Button variant="danger">
                      <FontAwesomeIcon
                        icon={faMinus}
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
