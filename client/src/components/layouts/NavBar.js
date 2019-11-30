import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fa fa-child"></i> Identify
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        {/* <li>
          <Link to="/register">Get Started</Link>
        </li> */}
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;