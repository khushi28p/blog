import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='contact' className="bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div>
            <span className="font-bold text-lg">QuillJot</span>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              QuillJot: A dynamic blog application crafted with React and JavaScript, offering an engaging platform for writers and readers alike.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:underline">Our Blogs</a></li>
              <li><a href="#" className="hover:underline">Write</a></li>
              <li><a href="#" className="hover:underline">Tutorials</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="mt-4 text-sm text-muted-foreground space-y-2">
              <p>info@quilljot.com</p>
              <p>+1-555-123-4567</p>
            </div>
            <div className="mt-4 flex space-x-4 text-lg">
              <a href="#" aria-label="Instagram"><FaInstagram className="text-muted-foreground hover:text-foreground transition-colors" /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF className="text-muted-foreground hover:text-foreground transition-colors" /></a>
              <a href="#" aria-label="Twitter"><FaTwitter className="text-muted-foreground hover:text-foreground transition-colors" /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
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