import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light ">
        <NavLink
          className="navbar-brand"
          to="#"
          style={{ marginLeft: "20px", fontWeight: "bold", fontSize: "1.5em" }}
        >
          <NavLink to="/"><img style={{height:"40px"}} src="https://i.ibb.co/dmZFYQ9/logo.png" alt="" /></NavLink>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="signup-button nav-link"
                to="/signup"
                style={{
                  paddingLeft: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
