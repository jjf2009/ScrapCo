import React from 'react';
// import footerLogo from "../assets/footer-logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 w-full min-w-full">
      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side - Logo and Nav */}
        <div className="md:w-1/2 w-full">
          <img src="123" alt="Scrap Marketplace Logo" className="mb-5 w-36" />
          <ul className="flex flex-col md:flex-row gap-4">
            <li><a href="/" className="hover:text-green-400">Home</a></li>
            <li><a href="/how-it-works" className="hover:text-green-400">How It Works</a></li>
            <li><a href="/sell-scrap" className="hover:text-green-400">Sell Scrap</a></li>
            <li><a href="/about" className="hover:text-green-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Right Side - Newsletter */}
        <div className="md:w-1/2 w-full">
          <p className="mb-4">
            Subscribe for updates on the best scrap deals and recycling tips!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md text-black focus:outline-none"
            />
            <button className="bg-green-500 px-6 py-2 rounded-r-md hover:bg-green-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6 px-6">
        
        {/* Left Side - Privacy Links */}
        <ul className="flex gap-6 mb-4 md:mb-0">
          <li><a href="/privacy-policy" className="hover:text-green-400">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:text-green-400">Terms of Service</a></li>
        </ul>

        {/* Right Side - Social Icons */}
        <div className="flex gap-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
