import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';
import About from '../Page/About';
import Home from '../Page/Home';
import Skill from '../Page/Skill';
import Service from '../Page/Service';
import MagicCursor from '../Commponets/MagicCursor/MagicCursor';
import Contact from '../Page/Contact';
import Education from '../Page/Education';
import Experience from '../Page/Experience';
import Footer from '../Shared/Footer';

const MainLayout = () => {

  return (
    <div className=" bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100 ">
      {/* Custom Cursor */}

      {/* Fixed Navbar */}
      <header className='fixed w-[100%] z-50 '>
        <Navbar />
      </header>

      {/* Main Content */}

      <div className='z-20'>
        <section id="home" className="scroll-mt-24 md:pt-34 pt-14">
          <Home />
        </section>
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="skill" className="scroll-mt-24">
          <Skill />
        </section>
        <section id='education' className="scroll-mt-24">
          <Education></Education>
        </section>
        {/* <section id='experience' className='scroll-mt-24'>
          <Experience></Experience>
        </section> */}
        <section id='contact' className="scroll-mt-24 ">
          <Contact></Contact>
        </section>
        <section>
          <Footer></Footer>
        </section>
      </div>


      <MagicCursor />
    </div>
  );
};

export default MainLayout;
