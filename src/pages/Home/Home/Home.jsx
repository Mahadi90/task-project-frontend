import React from 'react';
import AboutUS from '../AboutUS/AboutUS';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUS></AboutUS>
            <Services></Services>
        </div>
    );
};

export default Home;