import React from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import TIB from "../../assets/logos/logo.png";

const Navbar = () => {
  return (
    <BootstrapNavbar
      className="d-flex mx-auto justify-content-around align-items-center w-100"
      bg="white"
      expand="lg"
    >
      <Container>
        <NavLink to="/">
          <BootstrapNavbar.Brand href="#home">
            <img src={TIB} width={150} height={50} alt="brand-logo" />
          </BootstrapNavbar.Brand>
        </NavLink>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center">
            <NavLink className="nav-link" to="/about">
              Who We Are
            </NavLink>
            <NavLink className="nav-link" to="/what_we_do">
              What We Do
            </NavLink>
            <NavLink className="nav-link" to="/our_products">
              Our Products
            </NavLink>
            <NavLink className="nav-link" to="/team">
              Team
            </NavLink>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
