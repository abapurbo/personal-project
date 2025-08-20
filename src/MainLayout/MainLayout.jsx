import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';
import About from '../Page/About';
import Home from '../Page/Home';
import Skill from '../Page/Skill'
import Service from '../Page/Service'
import MagicCursor from '../Commponets/MagicCursor/MagicCursor';
const MainLayout = () => {
    const [scrolled, setScrolled] = useState(false);
    // scroll my navbar and change the navbar size
    useEffect(() => {
        const handleScroll = () => {
            const navbar = window.scrollY;
            if (navbar > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        //window scroll then call the handleScroll function
        window.addEventListener('scroll', handleScroll)
        // Clean up the event listener on component unmount
        // This is important to prevent memory leaks
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <div className='p-4  cursor-none bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100 '>
            {/* cursor */}
            <MagicCursor></MagicCursor>

            <div className={`fixed   left-10 right-10 duration-1000 transition-all z-40 ${scrolled ? 'left-20 right-20' : 'top-4'}`}>
                <Navbar></Navbar>
            </div>
            {/* for the main content */}
            <div className='z-10  mx-10 mt-30 scroll-mt-46'>
                <div id='home' className='scroll-mt-46'>
                    <Home></Home>
                </div>
                <div id='about' className='scroll-m-46'>
                    <About></About>
                </div>
                <div id='skill' className='scroll-mt-46'>
                    <Skill></Skill>
                </div>
                <div id='service' className='scroll-mt-46'>
                    <Service></Service>
                </div>
            </div>
            {/* for the footer  */}
            <div>

            </div>


        </div>
    );
};

export default MainLayout;