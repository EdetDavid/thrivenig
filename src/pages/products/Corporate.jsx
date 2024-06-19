import React from "react";
import corporate from "../../assets/images/corporate.jpg";
import "./Corporate.css";

const Corporate = () => {
  return (
    <div className="container-fluid px-0 bg-light m-0">
      <div className="corporate d-flex flex-column justify-content-end align-items-center ">
        <h1 className="fw-bold display-1 red-text black-text-shadow ">
          Corporate Travels
        </h1>
      </div>

      <img
        src={corporate}
        className="w-100 h-100 black-shadow"
        alt="board=of=directors"
      />
    </div>
  );
};

export default Corporate;
