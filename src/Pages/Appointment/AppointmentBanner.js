import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bgChair from '../../assets/images/bg.png'
const AppointmentBanner = ({date, setDate}) => {

    return (
        <div 
        style={{
            background: `url(${bgChair})`
            }}
         className="hero min-h-screen px-12">
            <div  className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair}  className="max-w-sm rounded-lg shadow-2xl m-12" alt="" />
                <div  className='p-18'>
                    <DayPicker
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;