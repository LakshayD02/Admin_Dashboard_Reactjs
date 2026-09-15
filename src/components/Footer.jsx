import React from 'react';

const Footer = () => (
  <div className="footer-premium">
    <div className="flex flex-col items-center gap-1">
      <p className="dark:text-gray-300 text-gray-500 text-sm tracking-wide">
        Crafted with <span className="text-red-400">♥</span> by{' '}
        <span className="gradient-text font-bold text-base">Lakshay Dhoundiyal</span>
      </p>
      <p className="dark:text-gray-500 text-gray-400 text-xs">
        © {new Date().getFullYear()} · Admin Dashboard · All rights reserved
      </p>
    </div>
  </div>
);

export default Footer;
