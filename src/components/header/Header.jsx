import React from "react";
import img1 from "../../assets/images/slider/img1.jpg";
import img2 from "../../assets/images/slider/img2.jpg";
import img3 from "../../assets/images/slider/img3.jpg";

import color from "../../config/colors";
import "./Header.css";

const Header = () => {
  return (
    <header class="header mt-4">
      <div
        id="ImageSlider"
        class="carousel slide"
        data-bs-ride="carousel"
        data-interval="3000"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#ImageSlider"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#ImageSlider"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#ImageSlider"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-block flex-wrap w-100 img-fluid "
              alt={img1}
            />
            <div className="carousel-caption d-block flex-wrap">
              <h2 className="text-white animated-caption text-head">
                The Future is
                <span style={styles.red} className="mx-2 bold">
                  Thrive
                </span>
              </h2>
              <p className="animated-caption text-light  sub-text">
                Whatever Industry or size, we can help.
              </p>
              <a
                style={styles.button}
                className="btn btn-lg animated-caption"
                role="button"
                href="#services"
              >
                <p className="p-0 m-0">TELL ME MORE</p>
              </a>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              src={img2}
              className="d-block flex-wrap w-100 img-fluid"
              alt={img2}
            />
            <div className="d-flex  mx-auto">
              <div className="carousel-caption d-flex flex-column  justify-content-center align-items-center text-wrap">
                <h2 className="text-white animated-caption text-head">
                  Take Charge of your
                  <b className="  bold text-info"> Life </b>
                </h2>
                <p className=" text-light animated-caption sub-text w-50 ">
                  Protect what matters with life, health, education, and other
                  type of personal insurance for your valuable possesions.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              src={img3}
              className="d-block flex-wrap w-100 img-fluid"
              alt={img3}
            />
            <div className="d-flex  mx-auto">
              <div className="carousel-caption d-flex flex-column  justify-content-center align-items-center text-wrap">
                <h2 className="text-white animated-caption text-head">
                  Get
                  <b className="bold text-success"> Covered </b>
                </h2>
                <p className=" text-white animated-caption sub-text w-50">
                  Protect what matters with life, health, education, and other
                  type of personal insurance for your valuable possesions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const styles = {
  red: {
    color: color.red,
  },
  button: {
    backgroundColor: color.red,
    color: color.white,
  },
  text: {
    color: "light-gray",
  },
};

export default Header;
