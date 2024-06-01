import React from 'react';
import { SiCommerzbank } from "react-icons/si";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center mx-4">
            <SiCommerzbank className='h-8 w-8 z-10 p-1 text-white bg-green-500 rounded-full mx-2' />
            <div className="flex-shrink-0">
              <span className="text-green-500 font-bold text-xl">banquee.</span>
            </div>
          </div>
          <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            <Link to="/features" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">Features</Link>
            <Link to="/compare" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">Compare</Link>
            <Link to="/support" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">Support</Link>
            <Link to="/blogs" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">Blog</Link>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <Link to="/login" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">Login</Link>
              <Link to="/login" className="ml-4 bg-green-500 text-white px-3 py-2 rounded-md text-sm font-medium">Open Account</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
