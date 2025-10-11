import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../FontStyle/fontStyle.css'
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import '../font/font.css'
import '../Shared/shared.css'
const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
    const handleSmoothScroll = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            setActiveSection(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // active link styling
  const linkClass = (id) =>
    `transition-colors duration-300 hover:text-purple-600 ${
      activeSection === id ? "text-purple-600 font-semibold" : "text-black"
    }`;

    return (
        <div  className='px-5  container  py-3 rounded-xl mx-auto  backdrop-blur-xl   bg-white/30 dark:bg-black/10  shadow-xl '>
            <nav className=' flex justify-between flex-row items-center'>
                <h1 className='text-2xl   font-extrabold'>&lt;<span className='text-4xl font-extrabold text-purple-600'>A</span>purbo/&gt;</h1>
                <div className='nav-links bitter-font  font-semibold inter-regular  space-x-10'>
                    <span className={linkClass('home')} onClick={() => handleSmoothScroll('home')}>Home</span>
                    <span className={linkClass('about')} onClick={() => handleSmoothScroll('about')}>About Me</span>
                    <span className={linkClass('skill')} onClick={() => handleSmoothScroll('skill')}>Skills</span>
                    <span className={linkClass('service')} onClick={() => handleSmoothScroll('service')}>Service</span>
                    <span className={linkClass('project')} onClick={() => handleSmoothScroll('project')}>Projects</span>
                    <span className={linkClass('contact')} onClick={() => handleSmoothScroll('contact')}>Contact Me</span>
                </div>
                <div className='flex items-center space-x-5'>
                  


                    <button className='px-4 py-2 rounded-xl bg-purple-600 text-white font-semibold 
                             shadow-md hover:bg-purple-700 transition-all duration-300'>Resume</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;