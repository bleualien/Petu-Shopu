import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fontsource/walter-turncoat";
import "@fontsource/single-day";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundImage: "url('background-pattern.png')",
        backgroundSize: "cover",
        border: "2px solid rgba(255, 255, 255, 0.5)",
        opacity: "0.8",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/">
          KuruKuru Petto Shoppu
        </Link>
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
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                style={{
                  fontFamily: "Walter Turncoat, cursive",
                  fontSize: "24px",
                  color: "#d3d3d3",
                }}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                style={{
                  fontFamily: "Walter Turncoat, cursive",
                  fontSize: "24px",
                  color: "#d3d3d3",
                }}
              >
                PRODUCTS
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link to="/login" className="btn btn-login me-2">
              Login
            </Link>
            <Link to="/" className="btn btn-signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const styles = `
  .logo {
    font-family: 'Comic Sans MS', cursive, sans-serif;
    font-size: 20px;
    color: white !important;
  }
  .btn-login {
    background-color: #86BB69;
    border-radius: 25px;
    color: black;
    font-family: 'Single Day', cursive;
    transition: 0.3s;
  }
  .btn-signup {
    background-color: #BBA569;
    border-radius: 25px;
    color: black;
    font-family: 'Single Day', cursive;
    transition: 0.3s;
  }
  .btn-login:hover {
    background-color: #74a857;
  }
  .btn-signup:hover {
    background-color: #a89257;
  }
  .navbar {
    border: 2px solid rgba(255, 255, 255, 0.5);
    opacity: 0.8;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
