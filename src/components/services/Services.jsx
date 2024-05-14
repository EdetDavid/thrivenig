import React from "react";

import img_service from "../../assets/images/img_service.png";

import { BsChevronRight } from "react-icons/bs";

import "./Services.css";

const Mission = () => {
  return (
    <section class=" p-lg-5 p-md-2 p-sm-0 m-sm-auto " id="learn">
      <div class="container">
        <div class="row  justify-content-around align-items-center ">
          <div id="img_box" class="col-lg-6 col-md-6 col-sm-12">
            <img src={img_service} class=" w-100 pb-2" alt="logo" />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 ">
            <h2 id="learn">Our Services</h2>
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              natus sed a qui sit odio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aut
              dolorem, non sed porro, earum maiores officiis, tempora deserunt
              asperiores natus! Sint laborum repellat fugit aliquid veritatis
              voluptatibus tempora praesentium?
            </p>
            <a href="#none" class="btn btn-light mt-3">
              <BsChevronRight /> Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
