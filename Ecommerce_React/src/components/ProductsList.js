import React from "react";
import { productsListHeaderTitle, addToCartButtonMessage } from "../Constants";
import { Card, Button, ListGroup } from "react-bootstrap";
import "../styles/ProductsList.css";

function ProductsList(props) {
  const { products, addProductsToCart } = props;
  return (
    <div className="products-list-container">
      <span>
        <b>{productsListHeaderTitle}</b>
        <hr />
      </span>
      <div className="products-list">
        {products.map((product, index) => (
          <Card className={"product-card"} key={product.id}>
            <Card.Header className="product-card-header">
              <img src={product.image} />
            </Card.Header>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
            </Card.Body>
            <Card.Footer>
              <Button
                variant="primary"
                onClick={() => addProductsToCart(product)}
              >
                {addToCartButtonMessage}
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
