import React from "react";
import travel from "../../assets/images/visa.jpg";
import "./Visa.css";

const Travel = () => {
  return (
    <div className="container-fluid px-0">
      <div className="travel d-flex flex-column justify-content-end align-items-center p-5">
        <h1 className="fw-bold display-1 red-text white-text-shadow mt-5 pt-5">
          Visa Assistance Services
        </h1>
      </div>

      <div className="flex-wrap">
        <img
          src={travel}
          className="w-100 h-100 black-shadow"
          alt="board=of=directors"
        />
      </div>
    </div>
  );
};

export default Travel;
