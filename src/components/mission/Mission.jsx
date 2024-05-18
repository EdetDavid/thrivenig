import React from "react";

import { GiBullseye } from "react-icons/gi";

import "./Mission.css";

const Mission = () => {
  return (
    <div data-aos="zoom-in" className="container">
      {/* icon */}

      <div className="d-flex flex-column justify-content-center align-items-center">
        <GiBullseye color="#fff" size={100} className="icon me-4" />
        <h4 className="text-white text-center"> Our Mission</h4>
        {/* text */}

        <div className="mission-text-container bg-transparent shadow border-double rounded">
          <p className="mission-text">
            To provide outstanding insurance intermediation service through
            continous customer evaluation and cutting edge technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
