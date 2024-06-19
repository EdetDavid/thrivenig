import React from "react";
import board from "../../assets/images/Board.jpg";
import "./Team.css";

const BoardOfDirectors = () => {
  return (
    <div className="container-fluid px-0">
      <div className="board d-flex flex-column justify-content-end align-items-center p-5">
        <h1 className="fw-bold display-1 red-text black-text-shadow mt-5 pt-5">
          Board Of Directors
        </h1>
      </div>

      <div className="pt-5">
        <img
          id="img"
          src={board}
          className="w-100 h-100 "
          alt="board=of=directors"
        />
      </div>
    </div>
  );
};

export default BoardOfDirectors;
