import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    const today = new Date();
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Navigation Links */}
        <ul className="footer-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Social Media Links */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Copyright Text */}
      <div className="footer-bottom">
      <p>Copyright <sup>&copy;</sup> { today.getFullYear() } All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
