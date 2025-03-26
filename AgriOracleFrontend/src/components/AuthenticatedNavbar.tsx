import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircle2 } from 'lucide-react';

interface AuthenticatedNavbarProps {
  logo: React.ReactNode;
  isAdmin: boolean;
}

const AuthenticatedNavbar: React.FC<AuthenticatedNavbarProps> = ({ logo, isAdmin }) => {
  return (
    <nav className="bg-[#2F4F3F] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/services" className="flex items-center space-x-2">
          {logo}
          <span className="text-xl font-bold">AGRI ORACLE</span>
        </Link>

        <div className="flex items-center space-x-6">
          {isAdmin && (
            <Link to="/admin" className="text-yellow-300 hover:text-yellow-200">
              Admin Panel
            </Link>
          )}
          <Link to="/services" className="hover:text-gray-200">
            Dashboard
          </Link>
          <div className="flex items-center space-x-2">
            <UserCircle2 className="w-6 h-6" />
            <span>User ID</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AuthenticatedNavbar;