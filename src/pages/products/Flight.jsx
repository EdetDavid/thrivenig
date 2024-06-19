import React from "react";
import flight from "../../assets/images/flight.jpg";
import "./Flight.css";

const Flight = () => {
  return (
    <div className="container-fluid px-0">
      <div className="flight d-flex flex-column justify-content-end align-items-center p-5">
        <h1 className="fw-bold display-1 red-text white-text-shadow mt-5 pt-5">
          Flight Reservation & Ticketing
        </h1>
      </div>

      <div className="flex-wrap">
        <img
          src={flight}
          className="w-100 h-100 black-shadow"
          alt="board=of=directors"
        />
      </div>
    </div>
  );
};

export default Flight;
