import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../FontStyle/fontStyle.css'
import { MdOutlineLightMode } from "react-icons/md";
const Home = () => {
    const [isActive, setIsActive] = useState(true)
    return (
        <div className='mx-10 mt-10 '>
            <nav className='flex justify-between   al'>
                <h1 className='text-3xl noto-serif-text  font-extrabold'>&lt;Apurbo/&gt;</h1>
                <div className='text-2xl unna-regular  space-x-10'>
                    <NavLink>Home</NavLink>
                    <NavLink>About Me</NavLink>
                    <NavLink>Skills</NavLink>
                    <NavLink>Service</NavLink>
                    <NavLink>Projects</NavLink>
                    <NavLink>Contact Me</NavLink>
                </div>
                <div className='flex items-center space-x-7'>
                    {
                        isActive ? <MdOutlineLightMode className='text-xl' /> :
                    }

                    <button className='btn text-xl rounded-xl'>Resume</button>
                </div>
            </nav>
        </div>
    );
};

export default Home;