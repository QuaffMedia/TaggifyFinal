import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Building } from 'lucide-react';
import { Link } from '../components/Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showServicesDropdown && !(event.target as Element).closest('.services-dropdown')) {
        setShowServicesDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showServicesDropdown]);

  const navbarClasses = `
    fixed w-full z-30 transition-all duration-300 
    ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}
  `;

  const linkClasses = `
    transition-colors duration-200 
    ${isScrolled ? 'text-gray-800 hover:text-blue-700' : 'text-white hover:text-blue-200'}
  `;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Building className={`mr-2 ${isScrolled ? 'text-blue-700' : 'text-white'}`} size={28} />
            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Taggify
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={linkClasses}>Home</Link>
            <Link to="/about" className={linkClasses}>About Us</Link>
            <div className="relative services-dropdown">
              <button 
                className={`flex items-center ${linkClasses}`}
                onClick={toggleServicesDropdown}
              >
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              {showServicesDropdown && (
                <div className="absolute bg-white shadow-lg rounded-md mt-2 py-2 w-48">
                  <Link to="/services/bpo" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">BPO Audits</Link>
                  <Link to="/services/kpo" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">KPO Compliance</Link>
                  <Link to="/services/social-media" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Social Media Audits</Link>
                  <Link to="/services/data-security" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Data Security</Link>
                  <Link to="/services/call-centre" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Call Centre Process </Link>
                </div>
              )}
            </div>
            <Link to="/industries" className={linkClasses}>Industries</Link>
            <Link to="/process" className={linkClasses}>Process</Link>
            <Link to="/clients" className={linkClasses}>Clients</Link>
            <Link to="/resources" className={linkClasses}>Resources</Link>
            <Link to="/contact" className={linkClasses}>Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-800 hover:text-blue-700">Home</Link>
              <Link to="/about" className="text-gray-800 hover:text-blue-700">About Us</Link>
              <div className="py-2">
                <button 
                  className="text-gray-800 font-medium mb-2 flex items-center"
                  onClick={toggleServicesDropdown}
                >
                  Services <ChevronDown size={16} className="ml-1" />
                </button>
                {showServicesDropdown && (
                  <div className="pl-4 flex flex-col space-y-2">
                    <Link to="/services/bpo" className="text-gray-700 hover:text-blue-700">BPO Audits</Link>
                    <Link to="/services/kpo" className="text-gray-700 hover:text-blue-700">KPO Compliance</Link>
                    <Link to="/services/social-media" className="text-gray-700 hover:text-blue-700">Social Media Audits</Link>
                    <Link to="/services/data-security" className="text-gray-700 hover:text-blue-700">Data Security</Link>
                    <Link to="/services/call-centre" className="text-gray-700 hover:text-blue-700">Call Centre Process</Link>
                  </div>
                )}
              </div>
              <Link to="/industries" className="text-gray-800 hover:text-blue-700">Industries</Link>
              <Link to="/process" className="text-gray-800 hover:text-blue-700">Process</Link>
              <Link to="/clients" className="text-gray-800 hover:text-blue-700">Clients</Link>
              <Link to="/resources" className="text-gray-800 hover:text-blue-700">Resources</Link>
              <Link to="/contact" className="text-gray-800 hover:text-blue-700">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;