import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = ({ className }) => {
  return (
    <footer
      data-aos="fade-in"
      data-aos-duration="300"
      className={`footer p-5 mt-5 text-white  ${className}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-dark">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li>About Thrive</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="col-md-3 text-dark">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Return Policy</li>
            </ul>
          </div>
          <div className="col-md-3 text-dark">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a className="nav-link " href="https://www.linkedin.com">
                  <FaLinkedin /> LinkedIn
                </a>
                <li>
                  <a className="nav-link " href="https://www.instagram.com">
                    <FaInstagram /> Instagram
                  </a>
                </li>
              </li>
              <li>
                <a className="nav-link " href="https://www.facebook.com">
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a className="nav-link " href="https://www.twitter.com">
                  <FaTwitter /> Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <p className="text-dark">
              &copy; {new Date().getFullYear()} Thrive Travels and Tours Limited
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
