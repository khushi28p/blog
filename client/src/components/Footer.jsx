import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {/* Section 1: QuillJot Description */}
          <div>
            <span className="font-bold text-lg">QuillJot</span>
            <p className="mt-4 text-sm text-gray-600 max-w-sm">
              QuillJot: A dynamic blog application crafted with React and JavaScript, offering an engaging platform for writers and readers alike.
            </p>
          </div>

          {/* Section 2: Explore Links */}
          <div>
            <h3 className="font-semibold text-gray-900">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Our Blogs</a></li>
              <li><a href="#" className="hover:underline">Write</a></li>
              <li><a href="#" className="hover:underline">Tutorials</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
            </ul>
          </div>

          {/* Section 3: Contact Info and Socials */}
          <div>
            <h3 className="font-semibold text-gray-900">Contact</h3>
            <div className="mt-4 text-sm text-gray-600 space-y-2">
              <p>info@quilljot.com</p>
              <p>+1-555-123-4567</p>
            </div>
            <div className="mt-4 flex space-x-4 text-lg">
              <a href="#" aria-label="Instagram"><FaInstagram className="text-gray-600 hover:text-gray-900 transition-colors" /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF className="text-gray-600 hover:text-gray-900 transition-colors" /></a>
              <a href="#" aria-label="Twitter"><FaTwitter className="text-gray-600 hover:text-gray-900 transition-colors" /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <span>© 2066 QuillJot. We cherish our users!</span>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <span className="mx-2">,</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;