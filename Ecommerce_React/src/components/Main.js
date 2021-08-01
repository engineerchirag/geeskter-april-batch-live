import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { logoUrl, logoAlt } from "../Constants";
import Cart from "./Cart";
import ProductCategories from "./ProductCategories";
import Carsourel from "./Carsourel";
import ProductsList from "./ProductsList";
import "../styles/Main.css";

function Main(props) {
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
            />
            <Button>
              <FontAwesomeIcon icon={faSearch} size={"1x"} color={"#ffffff"} />
            </Button>
          </Form>
          <Cart />
        </Container>
      </Navbar>
      <ProductCategories />
      <Carsourel />
      <ProductsList />
    </div>
  );
}

export default Main;
