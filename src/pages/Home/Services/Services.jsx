import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import slide1 from '../../../assets/images/webImg1.avif'
import slide2 from '../../../assets/images/webImg2.jpeg'
import slide3 from '../../../assets/images/webImg3.jpeg'

import "swiper/css";
import "swiper/css/pagination";

const Services = () => {
    return (
        <div>
            <h3  className='text-4xl font-semibold text-center mt-12'>Our Services</h3>
            <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-12"
      >
        <SwiperSlide><img className='w-64 h-64' src={slide2} alt="" /><h2 className='-mt-6 text-center font-bold text-white'>Web design</h2></SwiperSlide>
        <SwiperSlide><img className='w-64 h-64' src={slide1} alt="" />
        <h2 className='-mt-6 text-center font-bold text-white'>Web Develope</h2></SwiperSlide>
        <SwiperSlide><img className='w-64 h-64' src={slide3} alt="" />
        <h2 className='-mt-6 text-center font-bold text-white'>Firebase and Database</h2></SwiperSlide>
        <SwiperSlide><img className='w-64 h-64' src={slide2} alt="" /><h2 className='-mt-6 text-center font-bold text-white'>Web design</h2></SwiperSlide>
        <SwiperSlide><img className='w-64 h-64' src={slide1} alt="" />
        <h2 className='-mt-6 text-center font-bold text-white'>Web Develope</h2></SwiperSlide>
        <SwiperSlide><img className='w-64 h-64' src={slide3} alt="" />
        <h2 className='-mt-6 text-center font-bold text-white'>Firebase and Database</h2></SwiperSlide>
        <SwiperSlide><img className='w-64 h-64' src={slide2} alt="" /><h2 className='-mt-6 text-center font-bold text-white'>Web design</h2></SwiperSlide>
        <SwiperSlide><img className='w-64 h-64' src={slide1} alt="" />
        <h2 className='-mt-6 text-center font-bold text-white'>Web Develope</h2></SwiperSlide>
        <SwiperSlide><img className='w-64 h-64' src={slide3} alt="" />
        <h2 className='-mt-6 text-center font-bold text-white'>Firebase and Database</h2></SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Services;