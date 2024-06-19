// DropdownTwo.jsx
import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import colors from "../../config/colors";
import "./Dropdown.css";

const DropdownFive = ({ links, className, style }) => {
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
    }, 100);
  };

  return (
    <NavLink className="nav-link" to="/career">
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
          id="dropdownMenuButtonTwo"
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : "false"}
          onClick={() => setIsOpen(!isOpen)}
        >
          Career
        </button>
      </div>
    </NavLink>
  );
};

export default DropdownFive;
