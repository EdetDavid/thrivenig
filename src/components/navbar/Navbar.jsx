import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import color from "../../config/colors";
import logo from "../../assets/logos/logo-1.png";
import { useCookies } from "react-cookie";

import "./navbar.css";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();
  const [token, setToken, removeToken] = useCookies(["mytoken"]);

  const logoutBtn = () => {
    removeToken(["mytoken"]);
    
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll(".hide-nav");

    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", () => {
        const navbarCollapse = document.querySelector(".navbar-collapse");

        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      });
    }
  }, []);

  return (
    <nav
      id="myNav"
      className={`navbar navbar-expand-lg navbar-light bg-white px-lg-5  black-shadow ${
        isFixed ? "fixed-top" : ""
      }`}
    >
      <div className="container-fluid ">
        <NavLink to="/" className="navbar-brand hide-nav">
          <img src={logo} alt="brand-logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <i className="fas fa-bars fs-4"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link active hide-nav"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link hide-nav" to="/about-us">
                About Us
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle hide-nav"
                to="#home"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Products
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink
                    className="dropdown-item hide-nav"
                    to="/corporate-travels"
                  >
                    Corporate Travels
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item hide-nav"
                    to="/flight-reservation-ticketing"
                  >
                    Flight Reservation & Ticketing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item hide-nav"
                    to="/visa-assistant-services"
                  >
                    Visa Assistant Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item hide-nav"
                    to="/travel-insurance"
                  >
                    Travel Insurance
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item hide-nav" to="/vip-travels">
                    Vip Travels
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle hide-nav"
                to="#home"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Team
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink
                    className="dropdown-item hide-nav"
                    to="/board-of-directors"
                  >
                    Board of Directors
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item hide-nav"
                    to="/management-team"
                  >
                    Management Team
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item hide-nav"
                    to="/other-team-members"
                  >
                    Other Team Members
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link hide-nav" to="/career">
                Career
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link hide-nav" to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
          {location.pathname !== "/get-started" && (
            <form className="d-flex">
              {token["mytoken"] && token["mytoken"] !== "undefined" ? (
                <NavLink
                  onClick={logoutBtn}
                  style={styles.button}
                  className="btn text-white hide-nav"
                  to="/"
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  style={styles.button}
                  className="btn text-white hide-nav"
                  to={`/get-started`}
                >
                  Get Started
                </NavLink>
              )}
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

const styles = {
  button: {
    backgroundColor: color.red,
    marginTop: 2,
  },
};

export default Navbar;
