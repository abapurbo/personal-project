import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function ProjectSwiper() {
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
            <div>
              <h1></h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-[600px] '>
            <div>
              <img src="https://i.ibb.co.com/KxrDb3n4/Screenshot-2025-11-16-005611.png" alt="skill-swap-plartform-home-image" />
            </div>
            <div>

            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
