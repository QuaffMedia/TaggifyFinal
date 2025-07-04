import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Building } from 'lucide-react';
import { Link } from 'react-router-dom';


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

  const closeMenu = () => {
  setIsOpen(false);
  setShowServicesDropdown(false);
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
          <Link onClick={closeMenu} to="/" className="flex items-center">
         
            <span className={`font-bold text-xl mr-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Taggify
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link onClick={closeMenu} to="/" className={linkClasses}>Home</Link>
            <div className="relative services-dropdown">
              <button 
  className={`${isScrolled ? 'text-gray-800':'text-white'} flex items-center`}
  onClick={(e) => {
    e.stopPropagation();
    toggleServicesDropdown();
  }}
>
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              {showServicesDropdown && (
                <div className="absolute bg-white shadow-lg rounded-md mt-2 py-2 w-48">
                  <Link onClick={closeMenu} to="/services/call-auditing" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Call Auditing</Link>
                  <Link onClick={closeMenu} to="/services/bpo" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">BPO Audits</Link>
                  <Link onClick={closeMenu} to="/services/kpo" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">KPO Compliance</Link>
                  <Link onClick={closeMenu} to="/services/social-media" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Social Media Audits</Link>
                  
<Link onClick={closeMenu} to="/services/data-security" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Data Security</Link>
                  <Link onClick={closeMenu} to="https://www.quaffglobalservices.com/" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Other Services</Link>

                </div>
              )}
            </div>
            <Link onClick={closeMenu} to="/industries" className={linkClasses}>Industries</Link>
            <Link onClick={closeMenu} to="/process" className={linkClasses}>Process</Link>
            <Link onClick={closeMenu} to="/clients" className={linkClasses}>Clients</Link>
            
            <Link onClick={closeMenu} to="/about" className={linkClasses}>About Us</Link>
            {/* <Link onClick={closeMenu} to="/resources" className={linkClasses}>Resources</Link> */}
            <Link onClick={closeMenu} to="/contact" className={linkClasses}>Contact</Link>
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
              <Link onClick={closeMenu} to="/" className="text-gray-800 hover:text-blue-700">Home</Link>
           
              <div>
  <button 
    className="text-gray-800 font-medium mb-1 flex items-center"
    onClick={(e) => {
      e.stopPropagation();
      toggleServicesDropdown();
    }}
  >
    Services <ChevronDown size={16} className="ml-1" />
  </button>
  {showServicesDropdown && (
    <div className="pl-4 flex flex-col space-y-2 mb-2"> 
      <Link onClick={closeMenu} to="/services/call-auditing" className="block text-gray-800 hover:bg-blue-50">Call Auditing</Link>
      <Link onClick={closeMenu} to="/services/bpo" className="text-gray-700 hover:text-blue-700">BPO Audits</Link>
      <Link onClick={closeMenu} to="/services/kpo" className="text-gray-700 hover:text-blue-700">KPO Compliance</Link>
      <Link onClick={closeMenu} to="/services/social-media" className="text-gray-700 hover:text-blue-700">Social Media Audits</Link>
      <Link onClick={closeMenu} to="/services/data-security" className="text-gray-700 hover:text-blue-700">Data Security</Link>
      <Link onClick={closeMenu} to="https://www.quaffglobalservices.com/" className="text-gray-700 hover:text-blue-700">Other Services</Link>
    </div>
  )}
</div>
              <Link onClick={closeMenu} to="/industries" className="text-gray-800 hover:text-blue-700">Industries</Link>
              <Link onClick={closeMenu} to="/process" className="text-gray-800 hover:text-blue-700">Process</Link>
              <Link onClick={closeMenu} to="/clients" className="text-gray-800 hover:text-blue-700">Clients</Link>
                 <Link onClick={closeMenu} to="/about" className="text-gray-800 hover:text-blue-700">About Us</Link>
              {/* <Link onClick={closeMenu} to="/resources" className="text-gray-800 hover:text-blue-700">Resources</Link> */}
              <Link onClick={closeMenu} to="/contact" className="text-gray-800 hover:text-blue-700">Contact</Link>
            </div> 
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
