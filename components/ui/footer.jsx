import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-16 flex items-center justify-between px-4 bg-[black] bg-opacity-80 text-white shadow-lg z-50">
      <div className="flex-1">
        <p className="text-white text-sm"> {/* Same font style as dropdown menu */}
          &copy; 2024 Your Company Name
        </p>
      </div>
      <div>
        <a
          href="/privacy-policy"
          className="text-white text-sm hover:text-gray-400 hover:underline" // Matching dropdown hover style
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
