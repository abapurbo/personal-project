import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50 text-gray-700 py-12 px-6 lg:px-20">
      {/* Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-purple-200 pb-10">
        
        {/* Brand Info */}
        <div>
          <div className="flex items-center mb-4">
            <img
              className="w-12"
              src="https://i.ibb.co.com/Gf4wfFV0/Screenshot-2025-10-11-114307-removebg-preview.png"
              alt="Logo"
            />
            <h1 className="text-2xl font-semibold ml-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Apurbo
            </h1>
          </div>
          <p className="text-sm leading-relaxed">
            Hello, I'm Apurbo, a <span className="font-semibold">Front-End Developer</span> 
            focused on crafting elegant, responsive, and user-friendly websites. 
            Excited about executing your ideas with creativity and precision!
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-purple-600 mb-4">Say Hello</h2>
          <p className="flex items-center gap-2 mb-2">
            <FaEnvelope className="text-pink-500" /> absarker238@gmail.com
          </p>
          <p className="flex items-center gap-2 mb-2">
            <FaPhone className="text-green-500" /> +8801949823468
          </p>
          <p className="flex items-center gap-2">
            <IoLocationSharp className="text-purple-600" /> Dhaka, Bangladesh
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-purple-600 mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {["Home", "Skills", "Experience", "Projects"].map((item) => (
              <li
                key={item}
                className="hover:text-pink-500 transition-colors cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold text-purple-600 mb-4">Social</h2>
          <div className="flex gap-5 text-xl">
            <a href="#" className="hover:text-blue-600 transition-colors"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><FaLinkedin /></a>
            <a href="#" className="hover:text-gray-800 transition-colors"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-6">
        <p>
          &copy; {new Date().getFullYear()} <span className="font-medium text-purple-600">Apurbo</span>. 
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
