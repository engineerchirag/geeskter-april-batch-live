import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { logoUrl, logoAlt } from "../Constants";
import Cart from "./Cart";
import ProductCategories from "./ProductCategories";
import Carsourel from "./Carsourel";
import ProductsList from "./ProductsList";
import getAllProducts from "../helperFunctions/getAllProducts";
import AppContext from "./Context";
import "../styles/Main.css";

function Main(props) {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { cartItems, updateCartItems, addProductsToCart } = useContext(AppContext);

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

  // let displayFilterResults = () => {
  //   let tempFilteredResults = products.filter((x) =>
  //     x.title.toLowerCase().startsWith(searchInput.toLowerCase())
  //   );
  //   setFilteredProducts(tempFilteredResults);
  // };

  let onSearchChange = (event) => {
    setSearchInput(event.target.value);
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
            {/* <Button onClick={displayFilterResults}>
              <FontAwesomeIcon icon={faSearch} size={"1x"} color={"#ffffff"} />
            </Button> */}
          </Form>
          <Cart cartItems={cartItems} updateCartItems={updateCartItems} />
        </Container>
      </Navbar>
      <ProductCategories />
      <Carsourel />
      <ProductsList
        products={filteredProducts.length ? filteredProducts : products}
        addProductsToCart={addProductsToCart}
      />
    </div>
  );
}

export default Main;
