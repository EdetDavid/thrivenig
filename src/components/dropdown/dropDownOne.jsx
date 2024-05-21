import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import colors from "../../config/colors";
import "./Dropdown.css";

const DropdownOne = ({ links, className, style }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!dropdownRef.current?.matches(":hover")) {
        setIsOpen(false);
      }
    }, 100); // Slight delay to ensure smooth closing
  };

  return (
    <div
      className={`dropdown ${className}`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        style={{ color: colors.blue }}
        className="nav-link dropdown-button"
        type="button"
        id="dropdownMenuButton"
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
        onClick={() => setIsOpen(!isOpen)}
      >
        Who We Are
      </button>
      <div
        ref={dropdownRef}
        style={{ backgroundColor: colors.blue }}
        className={`dropdown-menu ${isOpen ? "show" : ""}`}
        aria-labelledby="dropdownMenuButton"
      >
        {links.map((link, index) => (
          <NavLink
            key={index}
            className="dropdown-item text-white"
            to={link.url}
            style={{ backgroundColor: "transparent" }}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default DropdownOne;
