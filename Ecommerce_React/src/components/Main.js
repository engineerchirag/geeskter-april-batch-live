import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  Alert,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { logoUrl, logoAlt, cartItemExistsMessage } from "../Constants";
import Cart from "./Cart";
import ProductCategories from "./ProductCategories";
import Carsourel from "./Carsourel";
import ProductsList from "./ProductsList";
import getAllProducts from "../helperFunctions/getAllProducts";
import "../styles/Main.css";

function Main(props) {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    getAllProducts()
      .then((products) => setProducts(products))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    let tempFilteredResults = products.filter((x) =>
      x.title.toLowerCase().startsWith(searchInput.toLowerCase())
    );
    setFilteredProducts(tempFilteredResults);
  }, [searchInput]);

  let displayFilterResults = () => {
    let tempFilteredResults = products.filter((x) =>
      x.title.toLowerCase().startsWith(searchInput.toLowerCase())
    );
    setFilteredProducts(tempFilteredResults);
  };

  let onSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  let addProductsToCart = (product) => {
    const index = cartItems.findIndex((x) => x.id === product.id);
    if (index === -1) {
      setCartItems((prev) => [...prev, product]);
      return;
    }
    setShowAlert(true);
  };

  return (
    <div className="main-container">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img src={logoUrl} alt={logoAlt} width="30" />
            </Navbar.Brand>
          </Link>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2 searchbar"
              aria-label="Search"
              value={searchInput}
              onChange={onSearchChange}
            />
            <Button onClick={displayFilterResults}>
              <FontAwesomeIcon icon={faSearch} size={"1x"} color={"#ffffff"} />
            </Button>
          </Form>
          <Cart cartItems={cartItems} />
        </Container>
      </Navbar>
      <ProductCategories />
      <Carsourel />
      {showAlert && (
        <Alert
          variant="danger"
          onClose={() => setShowAlert(false)}
          dismissible
          className="alert"
        >
          <Alert.Heading>{cartItemExistsMessage}</Alert.Heading>
        </Alert>
      )}
      <ProductsList
        products={filteredProducts.length ? filteredProducts : products}
        addProductsToCart={addProductsToCart}
      />
    </div>
  );
}

export default Main;
