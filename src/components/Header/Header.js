import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header-section">
      <Link to="/">Home</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/about">About</Link>
      <Link to="/grandparents">GrandParents</Link>
    </nav>
  );
};

export default Header;
