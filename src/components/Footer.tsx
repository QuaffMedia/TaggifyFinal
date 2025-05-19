import React from 'react';
import { Building, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from './Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Building className="mr-2" size={24} />
              <span className="font-bold text-xl">Taggify</span>
            </div>
            <p className="text-gray-400 mb-4">
              Specialized audit services for BPO, KPO, and Social Media operations serving Global clients.
            {/* </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div> */}

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/bpo" className="text-gray-400 hover:text-white transition-colors">BPO Operations Audit</Link></li>
              <li><Link to="/services/kpo" className="text-gray-400 hover:text-white transition-colors">KPO Compliance Verification</Link></li>
              <li><Link to="/services/social-media" className="text-gray-400 hover:text-white transition-colors">Social Media Operations Audit</Link></li>
              <li><Link to="/services/data-security" className="text-gray-400 hover:text-white transition-colors">Data Security Compliance</Link></li>
            
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <div className="flex items-start mb-3">
                <MapPin className="mr-2 mt-1 flex-shrink-0 text-blue-500" size={18} />
                <span className="text-gray-400">65, Sector-12, HUDA, Panipat, Haryana - 132103, India</span>
              </div>
              <div className="flex items-center mb-3">
                <Phone className="mr-2 text-blue-500" size={18} />
                <a href="tel:+911234567890" className="text-gray-400 hover:text-white transition-colors">+91-8005540849‬
</a>
              </div>
              <div className="flex items-center mb-3">
                <Mail className="mr-2 text-blue-500" size={18} />
                <a href="mailto:info@tagify.in" className="text-gray-400 hover:text-white transition-colors">audit@taggify.com</a>
              </div>
            </address>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />
        
        {/* Legal Information */}
        <div className="text-sm text-gray-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>© 2024 Taggify. All rights reserved.</p>
              <p className="mt-2">
                {/* CIN: U62099HR2024PTC118110 | PAN: AAKCT7010Q | TAN: RTKT09071G */}
              </p>
            </div>
            <div className="md:text-right space-x-4">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="text-gray-500 hover:text-gray-300 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
