import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2F4F3F] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AGRI ORACLE</h3>
            <p className="text-gray-300">
              Empowering farmers with AI-driven solutions for better crop management and market decisions.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/our-services" className="text-gray-300 hover:text-white">Our Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-gray-300">+91 XXXXXXXXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-gray-300">agrioracle@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-gray-300">VIPS-TC, Pitampura</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} AGRI ORACLE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;