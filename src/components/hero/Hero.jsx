import React from "react";

import BDC from "../../assets/logos/BDC.jpg";
import TTT from "../../assets/logos/TTT.jpg";
import TIB from "../../assets/logos/TIB.jpg";

import "./Hero.css";

const Hero = () => {
  return (
    <marquee scrollamount="10" id="marquee">
      <div className="marquee-container">

        <div className="row">

          <div className="col-md-4 m-0">
            <a href="#TIB">
              <img className="box-img" src={TIB} alt="TIB" />
            </a>
          </div>
          <div className="col-md-4 m-0">
            <a href="#TTT">
              <img className="box-img" src={TTT} alt="TTT" />
            </a>
          </div>
          <div className="col-md-4 m-0">
            <a href="#BDC">
              <img className="box-img" src={BDC} alt="BDC" />
            </a>
          </div>
        </div>

      </div>
    </marquee >
  );
};

export default Hero;


