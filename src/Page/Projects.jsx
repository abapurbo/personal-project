import React, { useRef } from 'react';
import ProjectSwiper from '../Commponets/ProjectSwiper/ProjectSwiper';

const Projects = () => {

    return (
        <section id='projects' className='container mx-auto md:py-16'>

            <div className='flex flex-col justify-center items-center '>
                <h1 className='md:text-3xl w-fit  text-2xl font-bold text-purple-700 border-b-3 border-b-[#9333EA]'>My Project <span className='text-black'>Shokcase</span></h1>
                <ProjectSwiper></ProjectSwiper>
            </div>
           
        </section>
    );
};

export default Projects;