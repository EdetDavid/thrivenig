import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="container text-center my-5">
      <div className="row">
        <div className="col">
          <h1 className="display-1 text-danger">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="lead mb-4">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link to="/" className="btn btn-primary btn-lg">
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
