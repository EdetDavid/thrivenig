import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../assets/images/slider/img1.jpg";
import img2 from "../../assets/images/slider/img2.jpg";
import img3 from "../../assets/images/slider/img3.jpg";
import color from "../../config/colors";

import "./Header.css";

const Header = () => {
  return (
    <header className="header mt-4">
      <Carousel interval={4000} controls={false}>
        <Carousel.Item>
          <img
            src={img1}
            className="slide-image d-block w-100 img-fluid"
            alt={img1}
          />
          <Carousel.Caption className="d-flex flex-column flex-wrap justify-content-center align-items-center animated-caption ">
            <h2 className="text-white text-head">
              The Future is
              <span style={{ color: color.red }} className="bold  mx-2 ">
                Thrive
              </span>
            </h2>
            <p className="text-light sub-text ">
              Whatever Industry or size, we can help.
            </p>
            <a
              style={{ backgroundColor: color.red, color: color.white }}
              className="btn btn-lg"
              role="button"
              href="#services"
            >
              <p className="p-0 m-0">TELL ME MORE</p>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img2}
            className="slide-image d-block w-100 img-fluid"
            alt={img2}
          />
          <Carousel.Caption className="d-flex flex-column flex-wrap justify-content-center align-items-center animated-caption ">
            <h2 className="text-white text-head">
              Take Charge of your
              <b className="bold text-info"> Life </b>
            </h2>
            <p className="text-light sub-text w-50">
              Protect what matters with life, health, education, and other type
              of personal insurance for your valuable possesions.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img3}
            className="slide-image d-block w-100 img-fluid"
            alt={img3}
          />
          <Carousel.Caption className="d-flex flex-column flex-wrap justify-content-center align-items-center animated-caption ">
            <h2 className="text-white text-head">
              Get
              <b className="bold text-success"> Covered </b>
            </h2>
            <p className="text-white sub-text w-50">
              Protect what matters with life, health, education, and other type
              of personal insurance for your valuable possesions.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </header>
  );
};

export default Header;
