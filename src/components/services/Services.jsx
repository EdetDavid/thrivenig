import React from "react";
import { motion } from "framer-motion";

import img_service from "../../assets/images/img_service.png";

import { BsChevronRight } from "react-icons/bs";

import "./Services.css";
import useInView from "../../hooks/useInView";
import { fadeInUp, staggerContainer, fadeInLeft } from "../../utils/animation";

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.12 });

  return (
    <motion.section
      ref={ref}
      id="learn"
      className="p-lg-5 p-md-2 p-sm-0 m-sm-auto"
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container">
        <div className="row justify-content-around align-items-center">
          <motion.div id="img_box" className="col-lg-6 col-md-6 col-sm-12" variants={fadeInLeft}>
            <img src={img_service} className="w-100 pb-2 rounded shadow-sm" alt="logo" />
          </motion.div>
          <motion.div className="col-lg-6 col-md-6 col-sm-12" variants={fadeInUp}>
            <h2 id="learn">Our Services</h2>
            <ul className="list-group service-list">
              <li className="list-group-item">Risk assessment and analysis.</li>
              <li className="list-group-item">Advisory services &amp; solutions.</li>
              <li className="list-group-item">
                Negotiation of competitive premiums and policy terms with insurers; giving clients the best coverages at optimal price.
              </li>
              <li className="list-group-item">Ensuring prompt arrangement of insurance cover and renewals</li>
              <li className="list-group-item">Researching policies from different insurers.</li>
            </ul>

            <a href="/what-we-do" className="btn btn-light mt-3 service-cta">
              <BsChevronRight /> Read More
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
