import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  logo: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ logo }) => {
  return (
    <nav className="bg-[#2F4F3F] text-white px-4 py-4 font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center text-white no-underline">
          {logo}
          <span className="ml-2 text-xl font-bold">AGRI ORACLE</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/our-services" className="hover:text-gray-300">Our Services</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex gap-4">
          <Link
            to="/register"
            className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-[#2F4F3F] transition"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-white text-[#2F4F3F] px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
