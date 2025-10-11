import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';
import About from '../Page/About';
import Home from '../Page/Home';
import Skill from '../Page/Skill';
import Service from '../Page/Service';
import MagicCursor from '../Commponets/MagicCursor/MagicCursor';
import Contact from '../Page/Contact';

const MainLayout = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className=" bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100 ">
      {/* Custom Cursor */}
      

      {/* Fixed Navbar */}
      <header
        className={`fixed w-full  z-50    transition-all duration-300 ${
          scrolled
            ? ' py-3 px-16'
            : ' py-5 px-10'
        }`}
      >
        <Navbar />
      </header>

      {/* Main Content */}
      
       <div className='z-20'>
         <section id="home" className="scroll-mt-24 pt-34">
          <Home />
        </section>
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="skill" className="scroll-mt-24">
          <Skill />
        </section>
        {/* <section id="service" className="scroll-mt-24">
          <Service />
        </section> */}
        <section id='contact' className="scroll-mt-24 ">
            <Contact></Contact>
        </section>
       </div>
    
      <MagicCursor />
    </div>
  );
};

export default MainLayout;
