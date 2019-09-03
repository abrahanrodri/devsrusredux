import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        DevsR'Us
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/eventView"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Event View
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/CreateEvent"
              className={
                window.location.pathname === "/CreateEvent"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Create Event
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Comments"
              className={
                window.location.pathname === "/Comments"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Comments
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
