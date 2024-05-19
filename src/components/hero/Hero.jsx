import React from "react";

import BDC from "../../assets/logos/BDC.png";
import TTT from "../../assets/logos/TTT.png";
import TIB from "../../assets/logos/TIB.png";

import "./Hero.css";

const Hero = () => {
  return (
    <marquee scrollamount="10" id="marquee">
      <div className="marquee-container">
        <div className="d-flex">
          <div className="d-flex">
            <a href="https://thrive-insurance.vercel.app">
              <img className="box-img" src={TIB} alt="TIB" />
            </a>
          </div>
          <div className="d-flex">
            <a href="#TTT">
              <img className="box-img" src={TTT} alt="TTT" />
            </a>
          </div>
          <div className="d-flex">
            <a href="#BDC">
              <img className="box-img" src={BDC} alt="BDC" />
            </a>
          </div>
        </div>
      </div>
    </marquee>
  );
};

export default Hero;
