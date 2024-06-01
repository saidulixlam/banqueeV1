// src/components/HeroSection.js

import React from 'react';
import Card from './Card.js';

const HeroSection = () => {
    return (
        <section className="bg-green-50 h-screen flex flex-col justify-center overflow-hidden">
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> */}
                <h1 className="text-5xl font-bold text-gray-900 mb-4 text-center">All in one card.</h1>
                <p className="text-xl text-gray-700 mb-8 text-center">
                    Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo duis ut diam.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="open-account" className="bg-green-500 text-white px-6 py-3 rounded-md text-lg font-medium">Open Account</a>
                    <a href="compare-cards" className="text-green-500 border border-green-500 px-6 py-3 rounded-md text-lg font-medium">Compare Cards</a>
                </div>
                <div className="flex justify-center mt-40 relative w-full">
                    

                    <div className='mt-36 absolute left-0' style={{ transform: 'rotate(90deg)' }}>
                        <Card bgColor="bg-gray-800" textColor="white" />
                    </div>
                    <div className='mt-36 absolute right-0' style={{ transform: 'rotate(90deg)' }}>
                        <Card bgColor="bg-gray-800" textColor="white" />
                    </div>

                    <div className='mt-28 absolute left-80 lg:left-100' style={{ transform: 'rotate(90deg)' }}>
                        <Card bgColor="bg-teal-500" textColor="white" />
                    </div>

                    <div className='mt-28 absolute right-80 lg:right-100' style={{ transform: 'rotate(90deg)' }}>
                        <Card bgColor="bg-teal-500" textColor="white" />
                    </div>

                    <div className='mt-16 absolute' style={{ transform: 'rotate(90deg)' }}>
                            <Card bgColor="bg-yellow-400" textColor="gray-900" />
                        </div>
                </div>
        </section>
    );
}

export default HeroSection;
