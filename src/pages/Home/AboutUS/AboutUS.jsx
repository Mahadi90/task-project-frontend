import React from 'react';
import img1 from '../../../assets/images/about-1.jpg'
import img2 from '../../../assets/images/about-2.webp'

const AboutUS = () => {
    return (
        <>
        <h3  className='text-4xl font-semibold text-center mt-12'>About US</h3>
        <div className='md:flex justify-between mb-12'>
         <div className='md:w-1/2'>
         <img className='p-12' src={img1} alt="" />
         <img className='md:w-1/2 md:-mt-32 md:ms-72' src={img2} alt="" />
         </div>
         <div className='space-y-4 md:w-1/2 mt-24 ms-6'>
            <h2 className='text-2xl font-semibold'>Here are all about us</h2>
            <p className='text-gray-500 font-semibold'>Our company provides various ways to collaborate. You can enhance your current team, acquire a dedicated team to manage all parts of your project, or receive help to tackle a single project for a fixed cost. Choosing us as your tech partner brings you the best combination of expertise, quality, price, productivity, and openness to communication. Our React.js developers will consider your specifications to build applications with great interfaces.
</p>
            <button className='btn btn-primary'>Get Started</button>
         </div>
        </div>
        </>
    );
};

export default AboutUS;