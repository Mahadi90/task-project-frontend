import React from 'react';
import Lottie from "lottie-react";

import bannerIMg from '../../../../public/bannerLogo.json'

const Banner = () => {
    return (
        <div className='md:flex justify-between'>
         <div className='space-y-4 w-1/2 mt-24'>
            <h1 className='text-5xl font-semibold'>React Front end Web Application</h1>
            <p className='text-gray-500 font-semibold'>100% Custom wensite from design to development</p>
            <button className='btn btn-primary'>Get Started</button>
         </div>
         <div className='w-1/2 flex justify-end'>
         <Lottie className='w-full' animationData={bannerIMg} loop={true} />
         </div>
        </div>
    );
};

export default Banner;