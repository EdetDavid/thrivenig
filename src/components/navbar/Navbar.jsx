import React, { useEffect, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/thrive.jpg";
import DropdownOne from "../dropdown/dropDownOne";
import DropdownTwo from "../dropdown/dropDownTwo";
import DropdownThree from "../dropdown/dropDownThree";
import DropdownFour from "../dropdown/dropDownFour";
import "./navbar.css";
import "../dropdown/Dropdown.css";
import colors from "../../config/colors";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownOneLinks = [
    { label: "Our Group", url: "/group" },
    { label: "Our Mission", url: "/group" },
  ];

  const dropdownTwoLinks = [
    { label: "Our Services", url: "/our-services" },
    { label: "Our Competitive Edge", url: "/our-services" },
  ];

  const dropdownThreeLinks = [
    {
      label: "Thrive insurance Brokers",
      url: "https://insurance.thrivenig.com/",
    },
    { label: "Thrive Travels And Tours", url: "https://travels.thrivenig.com" },
    { label: "Paradise Forex BDC", url: "https://thrivenig.com" },
  ];

  const dropdownFourLinks = [
    {
      label: "Board of Directors",
      url: "/board-of-directors",
    },
    { label: "Management Team", url: "/management-team" },
    { label: "Other Team Members", url: "/other-team-members" },
  ];

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

  return (
    <div
      className={`gpt3__navbar bg-white pt-lg-4 pb-0 ${
        isScrolled ? "fixed-top black-shadow" : ""
      }`}
    >
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <NavLink to="/" className="navbar-brand fs-4 fw-bold">
            <img
              id="nav-logo"
              alt="logo"
              src={logo}
              style={{ width: 150, height: 75 }}
            />
          </NavLink>
        </div>
        <div className="gpt3__navbar-links_container">
          <DropdownOne className="nav-links mx-2" links={dropdownOneLinks} />
          <DropdownTwo className="nav-links mx-2" links={dropdownTwoLinks} />
          <DropdownThree
            className="nav-links mx-2"
            links={dropdownThreeLinks}
          />
          <DropdownFour className="nav-links mx-2" links={dropdownFourLinks} />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <a href="/#contact" className="nav-link">
          <button id="nav-btn" className="btn" type="button">
            Contact
          </button>
        </a>
      </div>
      <div className="gpt3__navbar-menu">
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
            className="gpt3__navbar-menu_container scale-up-center"
          >
            <div className="gpt3__navbar-menu_container-links">
              {/* Links for Dropdown 1 */}
              {dropdownOneLinks.map((link, index) => (
                <NavLink
                  key={index}
                  onClick={handleHideMobileNav}
                  to={link.url}
                  className="nav-link text-white"
                >
                  {link.label}
                </NavLink>
              ))}
              {/* Links for Dropdown 2 */}
              {dropdownTwoLinks.map((link, index) => (
                <NavLink
                  key={index}
                  onClick={handleHideMobileNav}
                  to={link.url}
                  className="nav-link text-white"
                >
                  {link.label}
                </NavLink>
              ))}
              {/* Links for Dropdown 3 */}
              {dropdownThreeLinks.map((link, index) => (
                <NavLink
                  key={index}
                  onClick={handleHideMobileNav}
                  to={link.url}
                  className="nav-link text-white"
                >
                  {link.label}
                </NavLink>
              ))}
              {/* Links for Dropdown 4 */}
              {dropdownFourLinks.map((link, index) => (
                <NavLink
                  key={index}
                  onClick={handleHideMobileNav}
                  to={link.url}
                  className="nav-link text-white"
                >
                  {link.label}
                </NavLink>
              ))}
              <a href="/#contact" className="nav-link">
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
