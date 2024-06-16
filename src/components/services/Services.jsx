import React from "react";
import {NavLink} from "react-router-dom"

import img_service from "../../assets/images/img_service.png";

import { BsChevronRight } from "react-icons/bs";

import "./Services.css";

const Services = () => {
  return (
    <section className=" p-lg-5 p-md-2 p-sm-0 m-sm-auto " id="learn">
      <div className="container">
        <div className="row  justify-content-around align-items-center ">
          <div
            data-aos="fade-up"
            id="img_box"
            className="col-lg-6 col-md-6 col-sm-12"
          >
            <img src={img_service} className=" w-100 pb-2" alt="logo" />
          </div>
          <div data-aos="fade-up" className="col-lg-6 col-md-6 col-sm-12 ">
            <h2 id="learn">Our Services</h2>
            <ul className="list-group">
              <li className="list-group-item">Risk assessment and analysis.</li>
              <li className="list-group-item">Advisory services & solutions.</li>
              <li className="list-group-item">
                Negotiation of competitive premiums and policy terms with
                insurers; giving clients the best coverages at optimal price.
              </li>
              <li className="list-group-item">
                Ensuring prompt arrangement of insurance cover and renewals
              </li>

              <li className="list-group-item">
                Researching policies from different insurers.
              </li>
            </ul>

            <NavLink to="/our-services" className="btn btn-outline-dark text-decoration-none mt-3 ">
              <BsChevronRight /> Read More
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
