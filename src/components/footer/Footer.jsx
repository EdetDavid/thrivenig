import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = ({ className }) => {
  return (
    <footer className={`footer p-4 ${className}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li>About Thrive</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Return Policy</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a className="nav-link " href="https://www.linkedin.com">
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a className="nav-link " href="https://www.instagram.com">
                  <FaInstagram /> Instagram
                </a>
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
            <p>&copy; {new Date().getFullYear()} Thrive Holdings Limited</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
