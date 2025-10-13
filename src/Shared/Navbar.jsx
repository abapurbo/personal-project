import React, { useEffect, useState } from 'react';
import '../FontStyle/fontStyle.css';
import '../font/font.css';
import '../Shared/shared.css';
import { Button, Drawer, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleSmoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skill", "education", "experience", "project", "contact"];
      const scrollY = window.scrollY;

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const offsetTop = section.offsetTop - 150;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveSection(sections[i]);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `relative cursor-pointer transition-colors duration-300 text-[16px] pb-1
    ${activeSection === id ? "text-purple-600 font-semibold" : "text-black hover:text-purple-600"}
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
    after:w-0 after:bg-gradient-to-r after:from-purple-500 after:via-pink-500 after:to-purple-500
    after:rounded-full after:transition-all after:duration-500
    ${activeSection === id ? "after:w-[100%]" : "hover:after:w-[100%]"}
    `;

  const navLinks = (
    <>
      <span className={linkClass("home")} onClick={() => handleSmoothScroll("home")}>Home</span>
      <span className={linkClass("about")} onClick={() => handleSmoothScroll("about")}>About Me</span>
      <span className={linkClass("skill")} onClick={() => handleSmoothScroll("skill")}>Skills</span>
      <span className={linkClass("education")} onClick={() => handleSmoothScroll("education")}>Education</span>
      <span className={linkClass("experience")} onClick={() => handleSmoothScroll("experience")}>Experience</span>
      <span className={linkClass("project")} onClick={() => handleSmoothScroll("project")}>Projects</span>
      <span className={linkClass("contact")} onClick={() => handleSmoothScroll("contact")}>Contact Me</span>
    </>
  );

  return (
    <div className="px-2 z-50  fixed top-0 left-0 right-0 py-3 backdrop-blur-xl bg-white/30 dark:bg-black/10 shadow-xl transition-all duration-500">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="w-12"
            src="https://i.ibb.co.com/Gf4wfFV0/Screenshot-2025-10-11-114307-removebg-preview.png"
            alt="Logo"
          />
          <h1
            className="text-2xl font-semibold ml-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Apurbo
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-6 font-semibold">{navLinks}</div>

        {/* Desktop Resume Button */}
        <div className="hidden lg:flex">
          <button
            className="px-4 py-2 rounded-xl bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition-all duration-300"
          >
            Resume
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <IconButton onClick={toggleDrawer(true)}>
            <Menu className="text-purple-600" />
          </IconButton>
        </div>

        {/* Drawer for Mobile */}
        <Drawer
          anchor="left"
          open={open}
          onClose={toggleDrawer(false)}
        
        >
          <div className="flex flex-col  p-6 space-y-4 w-60">
            <div className="flex flex-col space-y-4 justify-center items-center">
              {navLinks}
            </div>
            <button
              className="mt-4 px-4 py-2 rounded-xl bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition-all duration-300"
            >
              Resume
            </button>
          </div>
        </Drawer>

      </nav>
    </div>
  );
};

export default Navbar;
