import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/logoWhite.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white z-[999]">
    <div className='flex flex-row items-center gap-4 justify-center'>
  <img src={logo} className="w-24 h-24 relative left-[100px]"/>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-dmsans">Preeminence Lab</h3>
            <p className="text-gray-400">
              Transforming businesses through innovative digital solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/web-development" className="text-gray-400 hover:text-white">Web Development</Link></li>
              <li><Link to="/services/mobile-development" className="text-gray-400 hover:text-white">Mobile Development</Link></li>
              <li><Link to="/services/web-branding" className="text-gray-400 hover:text-white">Web Branding</Link></li>
              <li><Link to="/services/digital-marketing" className="text-gray-400 hover:text-white">Digital Marketing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/work" className="text-gray-400 hover:text-white">Our Work</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">contact@yourcompany.com</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
              <li className="text-gray-400">123 Tech Street, Silicon Valley, CA 94025</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Preeminence Lab. All rights reserved.
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;