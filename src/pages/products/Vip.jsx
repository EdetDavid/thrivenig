import React from "react";
import vip from "../../assets/images/vip.jpg";
import "./Vip.css";

const Vip = () => {
  return (
    <div className="container-fluid px-0">
      <div className="vip d-flex flex-column justify-content-end align-items-center p-5">
        <h1 className="fw-bold display-1 red-text black-text-shadow mt-5 pt-5">
          Vip Travels
        </h1>
      </div>

      <div className="flex-wrap">
        <img
          src={vip}
          className="w-100 h-100 black-shadow"
          alt="board=of=directors"
        />
      </div>
    </div>
  );
};

export default Vip;
