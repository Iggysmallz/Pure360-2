
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-primary">Pure360</a>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-gray-600 hover:text-primary transition duration-300">Services</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition duration-300">How It Works</a>
            <a href="#team" className="text-gray-600 hover:text-primary transition duration-300">Our Team</a>
            <a href="#book" className="bg-primary text-white font-bold py-2 px-4 rounded-full hover:bg-primary-dark transition duration-300">Book Now</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4">
            <a href="#services" className="block py-2 text-gray-600 hover:text-primary">Services</a>
            <a href="#how-it-works" className="block py-2 text-gray-600 hover:text-primary">How It Works</a>
            <a href="#team" className="block py-2 text-gray-600 hover:text-primary">Our Team</a>
            <a href="#book" className="block mt-2 bg-primary text-white font-bold py-2 px-4 rounded-full text-center hover:bg-primary-dark transition duration-300">Book Now</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
