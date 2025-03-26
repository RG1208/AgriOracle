import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  logo: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ logo }) => {
  return (
    <nav className="bg-[#2F4F3F] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          {logo}
          <span className="text-xl font-bold">AGRI ORACLE</span>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About Us</Link>
          <Link to="/our-services" className="hover:text-gray-200">Our Services</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact Us</Link>
        </div>

        <div className="flex space-x-4">
          <Link
            to="/register"
            className="bg-transparent border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#2F4F3F] transition"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-white text-[#2F4F3F] px-4 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;