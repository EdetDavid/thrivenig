import React from "react";

import BDC from "../../assets/logos/BDC.png";
import TTT from "../../assets/logos/TTT.png";
import TIB from "../../assets/logos/TIB.png";

import "./Hero.css";

const Hero = () => {
  return (
    // <marquee scrollamount="10" id="marquee">
    <div className="d-flex mx-auto marquee-container ">
      <div className="d-flex">
        <a href="https://www.insurance.thrivenig.com">
          <img className="box-img" src={TIB} alt="insurance-logo" />
        </a>
      </div>
      <div className="d-flex">
        <a href="https://www.travels.thrivenig.com">
          <img className="box-img" src={TTT} alt="travels-logo" />
        </a>
      </div>
      <div className="d-flex">
        <a href="/">
          <img className="box-img" src={BDC} alt="BDC" />
        </a>
      </div>
    </div>

    // </marquee>
  );
};

export default Hero;
