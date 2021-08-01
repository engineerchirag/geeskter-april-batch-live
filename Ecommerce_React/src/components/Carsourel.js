import React from "react";
import { Carousel } from "react-bootstrap";
import { carsourelImages } from "../Constants";
import "../styles/Carousel.css";

function Carsourel(props) {
  return (
    <div className="carousel-wrapper">
      <Carousel className="carousel">
        {carsourelImages.map((item, index) => (
          <Carousel.Item interval={1000} key={index}>
            <img
              className="d-block w-100 "
              src={item.imageUrl}
              alt={item.name}
              height="300"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Carsourel;
