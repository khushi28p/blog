import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) { 
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div
      className={`
        flex w-full items-center justify-between sticky top-0 z-50 px-8 py-4 transition-all duration-300
        ${scrolled ? 'bg-blue-50/50 backdrop-blur-md' : 'bg-blue-50/50'}
      `}
    >
      <span className='font-bold text-gray-900'>QUILLJOT</span>
      <div className='flex items-center gap-6'>
        <a href="#" className='hover:underline text-gray-600 hover:text-gray-900'>Features</a>
        <a href="#" className='hover:underline text-gray-600 hover:text-gray-900'>Pricing</a>
        <a href="#" className='hover:underline text-gray-600 hover:text-gray-900'>Resources</a>
        <Button variant="outline">Login</Button>
        <Button variant="secondary">Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;