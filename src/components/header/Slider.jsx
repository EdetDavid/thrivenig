import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import "./Slider.css";

import Covered from "../../assets/images/slider/covered.jpg";
import Life from "../../assets/images/slider/life.jpg";
import Pecuniary from "../../assets/images/slider/Pecuniary.jpg";
import mum from "../../assets/images/slider/mum.jpg";
import threeD from "../../assets/images/slider/3d.jpg";

const Slider = () => {
  return (
    <Row>
      <Col>
        <Carousel controls={false} interval={4000} touch={true}>
          <Carousel.Item className="position-relative">
            <img className="slide-image" src={Covered} alt="Slide 1" />
            <Carousel.Caption className="text-white position-absolute caption text-shadow">
              <h1 className="font-bold display-1">Property Insurance</h1>
              <p className="text-dark">Thank you for choosing our product!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="position-relative">
            <img className="slide-image" src={Life} alt="Slide 2" />
            <Carousel.Caption className="text-white position-absolute caption text-shadow">
              <h1 className="font-bold display-1">Life Insurance</h1>
              <p className="text-dark">
                We are committed to providing the best quality.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="position-relative">
            <img className="slide-image" src={Pecuniary} alt="Slide 3" />
            <Carousel.Caption className="text-white position-absolute caption text-shadow">
              <h1 className="font-bold display-1">Pecuniary Insurance</h1>
              <p className="text-dark">Our team is dedicated to serving you.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="position-relative">
            <img className="slide-image" src={mum} alt="Slide 3" />
            <Carousel.Caption className="text-white position-absolute caption text-shadow">
              <h1 className="font-bold display-1">Pecuniary Insurance</h1>
              <p className="text-dark">Our team is dedicated to serving you.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="position-relative">
            <img className="slide-image" src={threeD} alt="Slide 3" />
            <Carousel.Caption className="text-white position-absolute caption text-shadow">
              <h1 className="font-bold display-1">Pecuniary Insurance</h1>
              <p className="text-dark">Our team is dedicated to serving you.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
};

export default Slider;
