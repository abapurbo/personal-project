import React, { useEffect, useState } from 'react';
import { Link, NavLink} from 'react-router-dom';
import '../FontStyle/fontStyle.css'
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import '../font/font.css'
const Navbar = () => {
    const [theme, setTheme] = useState('light')
    console.log(theme)
    const lightTheme = {
       '--primary':'#F3F8FF',
       '--secondary':''
    }
    const darkTheme = {
        ' --cosmic-dark': '240 15 % 8 %',
        '  --cosmic-surface': '250 20 % 12 %'
    }
    // Effect to apply theme styles
    useEffect(() => {
        const selectTheme = theme === 'light' ? lightTheme : darkTheme;
        for (const value in selectTheme) {
            document.documentElement.style.setProperty(value, selectTheme[value]);
        }
    }, [theme])

    // Smooth navigation
    const handleSmoothScroll=(targetId)=>{
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    //Function to toggle theme
    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }
    return (
        <div className='nav px-5  py-3 rounded-xl bg-white backdrop-blur-2xl border-white/100 shadow-xl '>
            <nav className=' flex justify-between items-center'>
                <h1 className='text-2xl noto-serif-text  font-extrabold'>&lt;<span className='text-4xl font-extrabold text-'>A</span>purbo/&gt;</h1>
                <div className='bitter-font  font-medium inter-regular  space-x-10'>
                    <NavLink  onClick={()=>handleSmoothScroll('home')}>Home</NavLink>
                    <NavLink  onClick={()=>handleSmoothScroll('about')}>About Me</NavLink>
                    <NavLink  onClick={()=>handleSmoothScroll('skill')}>Skills</NavLink>
                    <NavLink  onClick={()=>handleSmoothScroll('service')}>Service</NavLink>
                    <NavLink  onClick={()=>handleSmoothScroll('project')}>Projects</NavLink>
                    <NavLink  onClick={()=>handleSmoothScroll('contact')}>Contact Me</NavLink>
                </div>
                <div className='flex items-center space-x-5'>
                    <div onClick={toggleTheme} className=' hover:text-purple-700 font-bold text-2xl hover:bg-gray-100 p-1 rounded-xl'>
                        {
                            theme === 'dark' ? <MdOutlineLightMode className='text-xl' /> : <MdOutlineNightlight className='text-xl' />

                        }
                    </div>


                    <button className='btn  font-semibold inter-regular  rounded-xl'>Resume</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;