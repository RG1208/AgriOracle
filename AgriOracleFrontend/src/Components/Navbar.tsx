import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // create and link your custom CSS here

function Navbar({ logo }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          {logo}
          <span className="navbar-title">AGRI ORACLE</span>
        </Link>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/our-services">Our Services</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="navbar-actions">
          <Link to="/register" className="btn-outline">Register</Link>
          <Link to="/login" className="btn-filled">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
