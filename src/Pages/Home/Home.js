import React from 'react';
import Banner from '../Banner/Banner';
import SecondaryBanner from '../Banner/SecondaryBanner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div  className=''>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <SecondaryBanner></SecondaryBanner>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;