import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoListSharp } from "react-icons/io5";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function ProjectSwiper({handleProjectDetails,openModal}) {
  
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=' '>
            <div>
              <img src="https://i.ibb.co.com/LDZmhPPY/Screenshot-2025-11-16-002012.png" alt="car-rental-plartform-home-image" />
            </div>
            <div className='p-4'>
              <div className='flex justify-between items-center'>
                <p className='text-xl text-black font-bold'><span className='text-red-600'>Rent</span>Wheels</p>
                <p className='bg-gray-200 px-2 py-1 shadow-2xl rounded-xs text-sm font-semibold'>Full-stack</p>
              </div>
              <div className='mt-3 space-y-3'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque reprehenderit harum autem animi quisquam, dicta consequuntur facilis dignissimos praesentium.</p>
                <div className='flex flex-wrap gap-2'>
                  <button className='flex items-center gap-1 text-black bg-gray-200 px-2 py-1 shadow-2xl rounded-xs text-sm font-semibold'>
                    <img className='w-5' src="https://i.ibb.co.com/qYgz5RVj/images-10-removebg-preview-1.png" alt="React-img" />
                    React
                  </button>
                  <button className='flex items-center gap-1 text-black bg-gray-200 px-2 py-1 shadow-2xl rounded-xs text-sm font-semibold'>
                    <img className='w-5' src="https://i.ibb.co.com/Csh60SY0/CIAZz2-CYc6-Kc-removebg-preview.png" alt="tailwind-img" />
                    Tailwind CSS
                  </button>
                  <button className='flex items-center gap-1 text-black bg-gray-200 px-2 py-1 shadow-2xl rounded-xs text-sm font-semibold'>
                    <img className='w-5' src="https://i.ibb.co/ZqRTS5Z/images-3-removebg-preview.png" alt="firebase-img" />
                    Firebase
                  </button>
                  <button className='flex items-center gap-1 text-black bg-gray-200 px-2 py-1 shadow-2xl rounded-xs text-sm font-semibold'>
                    <img className='w-5' src="https://i.ibb.co.com/Fb7LMB3S/images-2-removebg-preview.png" alt="firebase-img" />
                    MongoDB
                  </button>
                  <button className='flex items-center gap-1 text-black bg-gray-200 px-2 py-1 shadow-2xl rounded-xs text-sm font-semibold'>
                    <img className='w-5' src="https://i.ibb.co/HDhmgbqt/express-js.png" alt="firebase-img" />
                    Express.js
                  </button>
                  <button className='flex items-center gap-1 text-black bg-gray-200 px-2 py-1 shadow-2xl rounded-xs text-sm font-semibold'>
                    <img className='w-5' src="https://i.ibb.co.com/pBGBB0J2/nodejs-hex-removebg-preview.png" alt="firebase-img" />
                    Node.js
                  </button>

                </div>
                <div className='flex justify-between items-center  mt-8'>
                  <button className='text-black font-semibold flex items-center gap-1 bg-gray-300 px-2 py-1 rounded-sm '><FaExternalLinkAlt />View Project</button>
                  <button className='text-black font-semibold flex items-center gap-1 cursor-pointer bg-gray-200 px-2 py-1 rounded-sm '><img className='w-4' src="https://i.ibb.co.com/5xwL5N66/images-8-removebg-preview.png" alt="github-img" />Git Client</button>
                  <button className='text-black font-semibold flex items-center gap-1 cursor-pointer bg-gray-300 px-2 py-1 rounded-sm '><img className='w-4' src="https://i.ibb.co.com/5xwL5N66/images-8-removebg-preview.png" alt="github-img" />Git Server</button>
                </div>
              <p onClick={()=>{handleProjectDetails('RentWheels');openModal()}} className='flex items-center  hover:hover:text-red-600 text-black font-semibold justify-center gap-1'>
                  <IoListSharp className='text-xl hover:text-red-600' />
                  See Details
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-auto'>
          <div className='h-[600px] '>
            <div>
              <img src="https://i.ibb.co.com/KxrDb3n4/Screenshot-2025-11-16-005611.png" alt="skill-swap-plartform-home-image" />
            </div>
            <div className='p-4'>
              <div className='flex justify-between items-center'>
                <p className='text-xl text-black font-bold'><span className='text-[#9333EA]'>Skill</span>Swap</p>
                <button className='bg-gray-200 px-2 py-1 shadow-2xl rounded-xs text-sm font-semibold'>Front-End</button>
              </div>
              <div className='mt-3 space-y-3'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga corrupti consequatur optio ducimus facilis impedit possimus laboriosam iure, dicta modi.</p>
                <div className='flex flex-wrap gap-2'>
                  <button className='flex items-center gap-1 text-black bg-gray-200 px-2 py-1 shadow-2xl rounded-xs text-sm font-semibold'>
                    <img className='w-5' src="https://i.ibb.co.com/qYgz5RVj/images-10-removebg-preview-1.png" alt="React-img" />
                    React
                  </button>
                  <button className='flex items-center gap-1 text-black bg-gray-200 px-2 py-1 shadow-2xl rounded-xs text-sm font-semibold'>
                    <img className='w-5' src="https://i.ibb.co.com/Csh60SY0/CIAZz2-CYc6-Kc-removebg-preview.png" alt="tailwind-img" />
                    Tailwind CSS
                  </button>
                  <button className='flex items-center gap-1 text-black bg-gray-200 px-2 py-1 shadow-2xl rounded-xs text-sm font-semibold'>
                    <img className='w-5' src="https://i.ibb.co/ZqRTS5Z/images-3-removebg-preview.png" alt="firebase-img" />
                    Firebase
                  </button>
                </div>
              </div>
              <div className='flex justify-between items-center  mt-32'>
                <button className='text-black font-semibold flex items-center gap-1 bg-gray-300 px-2 py-1 rounded-sm '><FaExternalLinkAlt />View Project</button>
                <button className='text-black font-semibold flex items-center gap-1 cursor-pointer bg-gray-200 px-2 py-1 rounded-sm '><img className='w-4' src="https://i.ibb.co.com/5xwL5N66/images-8-removebg-preview.png" alt="github-img" />Git Client</button>
                <button className='text-black font-semibold flex items-center gap-1 cursor-pointer bg-gray-300 px-2 py-1 rounded-sm '><img className='w-4' src="https://i.ibb.co.com/5xwL5N66/images-8-removebg-preview.png" alt="github-img" />Git Server</button>
              </div>
              <p onClick={()=>{handleProjectDetails('skillSwap'),openModal()}} className='flex items-center mt-3  hover:hover:text-red-600 text-black font-semibold justify-center gap-1'>
                <IoListSharp className='text-xl hover:text-red-600' />
                See Details
              </p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
   
    </>
  );
}
