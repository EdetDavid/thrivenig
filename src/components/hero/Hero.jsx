import React from "react";

import "./Hero.css";

import "./vanilla";

const Hero = () => {
  return (
    <div>
      <h1 className=" display-6 text-shadow text-center my-4 text-white">
        Our Attributes
      </h1>
      <div class="d-flex justify-content-center align-items-center Container mx-auto ">
        <div data-aos="fade-down" class="Card">
          <div class="content">
            <h2>01</h2>
            <h3 className="text-shadow">Exceptional Customer Care</h3>
            <p className="text-shadow">
              At Thrive Insurance Brokers, we prioritize our clients by
              providing exceptional customer care. Our dedicated team is always
              ready to assist you with personalized support and prompt responses
              to your queries and claims. We understand that each client is
              unique, and we tailor our services to meet your individual needs,
              ensuring a seamless and satisfactory experience.
            </p>
            <a href="#home">Read More</a>
          </div>
          <div class="reflection"></div>
        </div>
        <div data-aos="fade-down" class="Card">
          <div class="content">
            <h2>02</h2>
            <h3 className="text-shadow">Comprehensive and Flexible Coverage</h3>
            <p className="text-shadow">
              Thrive Insurance Brokers offers a wide range of comprehensive
              insurance solutions designed to provide robust protection. Our
              flexible coverage options allow you to customize your policies to
              fit your specific requirements, giving you peace of mind knowing
              that you are adequately covered in all aspects of your life and
              business.
            </p>
            <a href="#home">Read More</a>
          </div>
          <div class="reflection"></div>
        </div>
        <div data-aos="fade-down" class="Card">
          <div class="content">
            <h2>03</h2>
            <h3 className="text-shadow">
              Local Expertise with Global Standards
            </h3>
            <p className="text-shadow">
              With a deep understanding of the Nigerian market, Thrive Insurance
              Brokers combines local expertise with global best practices. We
              stay ahead of industry trends and regulatory changes to offer you
              innovative and reliable insurance products. Our commitment to
              excellence ensures that you receive world-class service and
              solutions tailored to the local context.
            </p>
            <a href="#home">Read More</a>
          </div>
          <div class="reflection"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
