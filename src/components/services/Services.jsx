import React from "react";
import {NavLink} from "react-router-dom"

import img_service from "../../assets/images/img_service.png";

import { BsChevronRight } from "react-icons/bs";

import "./Services.css";

const Services = () => {
  return (
    <section class=" p-lg-5 p-md-2 p-sm-0 m-sm-auto " id="learn">
      <div class="container">
        <div class="row  justify-content-around align-items-center ">
          <div
            data-aos="fade-up"
            id="img_box"
            class="col-lg-6 col-md-6 col-sm-12"
          >
            <img src={img_service} class=" w-100 pb-2" alt="logo" />
          </div>
          <div data-aos="fade-up" class="col-lg-6 col-md-6 col-sm-12 ">
            <h2 id="learn">Our Services</h2>
            <ul class="list-group">
              <li class="list-group-item">Risk assessment and analysis.</li>
              <li class="list-group-item">Advisory services & solutions.</li>
              <li class="list-group-item">
                Negotiation of competitive premiums and policy terms with
                insurers; giving clients the best coverages at optimal price.
              </li>
              <li class="list-group-item">
                Ensuring prompt arrangement of insurance cover and renewals
              </li>

              <li class="list-group-item">
                Researching policies from different insurers.
              </li>
            </ul>

            <NavLink to="/our-services" class="btn btn-light mt-3 nav-link ">
              <BsChevronRight /> Read More
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
