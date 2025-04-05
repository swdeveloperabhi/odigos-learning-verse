
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CtaButton from './CtaButton';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-odigos-deepPurple">
            <span className="text-odigos-purple">O</span>digos
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-odigos-purple transition-colors">Features</a>
          <a href="#solutions" className="text-gray-700 hover:text-odigos-purple transition-colors">Solution</a>
          <a href="#comparison" className="text-gray-700 hover:text-odigos-purple transition-colors">Comparison</a>
          <a href="#testimonials" className="text-gray-700 hover:text-odigos-purple transition-colors">Testimonials</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <CtaButton>Request a Demo</CtaButton>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full py-4">
          <div className="flex flex-col space-y-3 px-6">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-odigos-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#solutions" 
              className="text-gray-700 hover:text-odigos-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Solution
            </a>
            <a 
              href="#comparison" 
              className="text-gray-700 hover:text-odigos-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Comparison
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-odigos-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <div className="pt-2">
              <CtaButton>Request a Demo</CtaButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
