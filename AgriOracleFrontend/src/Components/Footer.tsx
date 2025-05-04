import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css'; // Don't forget to create and import this file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">AGRI ORACLE</h3>
            <p>
              Empowering farmers with AI-driven solutions for better crop management and market decisions.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/our-services">Our Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <ul>
              <li><Phone size={16} /> +91 XXXXXXXXXX</li>
              <li><Mail size={16} /> agrioracle@gmail.com</li>
              <li><MapPin size={16} /> VIPS-TC, Pitampura</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-icons">
              <a href="#"><Facebook size={24} /></a>
              <a href="#"><Twitter size={24} /></a>
              <a href="#"><Instagram size={24} /></a>
              <a href="#"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AGRI ORACLE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
