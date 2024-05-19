import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/thrive.jpg";
import "./navbar.css";

import colors from "../../config/colors";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHideMobileNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const Menu = () => {
    return (
      <>
        <p>
          <NavLink
            onClick={handleHideMobileNav}
            to="/who_we_are"
            className={`nav-link ${toggleMenu ? "text-white" : "text-dark"}`}
          >
            Who We Are
          </NavLink>
        </p>
        <p>
          <NavLink
            onClick={handleHideMobileNav}
            to="/our_subsidiaries"
            className={`nav-link ${toggleMenu ? "text-white" : "text-dark"}`}
          >
            Our Subsidiaries
          </NavLink>
        </p>

        <p>
          <NavLink
            onClick={handleHideMobileNav}
            to="/careers"
            className={`nav-link ${toggleMenu ? "text-white" : "text-dark"}`}
          >
            Careers
          </NavLink>
        </p>

        <p>
          <NavLink
            onClick={handleHideMobileNav}
            to="/team"
            className={`nav-link ${toggleMenu ? "text-white" : "text-dark"}`}
          >
            Team
          </NavLink>
        </p>
      </>
    );
  };

  return (
    <div
      className={`gpt3__navbar text-white ${
        isScrolled ? "bg-white text-dark" : "bg-white"
      } fixed-top`}
      style={{
        transition: "background-color 0.3s ease-in",
      }}
    >
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <NavLink to="/" className="navbar-brand fs-4 fw-bold">
            <img
              id="nav-logo"
              alt="logo"
              src={logo}
              style={{ width: 150, height: 50 }}
            />
          </NavLink>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="gpt3__navbar-sign">
        <NavLink to="/login" className="nav-link">
          <button id="nav-btn" className="btn" type="button">
            Contact
          </button>
        </NavLink>
      </div>

      <div className="gpt3__navbar-menu ">
        {toggleMenu ? (
          <RiCloseLine
            color={`${isScrolled ? "#181344" : "#181344"}`}
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color={`${isScrolled ? "#181344" : "#181344"}`}
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            style={{ backgroundColor: colors.blue }}
            className="gpt3__navbar-menu_container scale-up-center  z-50"
          >
            <div className="gpt3__navbar-menu_container-links ">
              <Menu />
              <a href="#contact" className="nav-link">
                <button className="btn btn-danger" type="button">
                  Contact
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
