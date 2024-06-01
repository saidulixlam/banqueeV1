import React from 'react';
import image from '../utils/mobile.jpg';
import { AiOutlineThunderbolt } from "react-icons/ai";
import { RiBankCardLine } from "react-icons/ri";
import { AiOutlineMobile } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { FaAddressCard } from "react-icons/fa";

import { FaWifi } from "react-icons/fa";

const Features = () => {
    return (
        <section className="bg-white flex flex-col lg:flex-row justify-between mt-10 sm:mx-10 sm:mt-20">
            <div className="w-full lg:w-1/2 p-6 lg:mx-24">
                <h2 className="text-3xl font-bold mb-6 text-left">One app.</h2>
                <h2 className="text-3xl font-bold mb-6">One banking.</h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col items-start bg-light shadow-md py-4 px-6 rounded-md border border-gray-300 h-42">
                        <AiOutlineThunderbolt className='h-10 w-10 p-2 text-green-500 bg-green-100 rounded-full' />
                        <p className="text-lg font-semibold mt-2">Saving</p>
                        <p className="text-lg font-semibold">accounts</p>
                        <p className="text-sm text-gray-600">Senectus et netus et malesuada fames ac turpis.</p>
                    </div>
                    <div className="flex flex-col items-start bg-light shadow-md py-4 px-6 rounded-md border border-gray-300 h-42">
                    
<RiBankCardLine className='h-10 w-10 p-2 text-green-500 bg-green-100 rounded-full' />
                        <p className="text-lg font-semibold mt-2">Saving</p>
                        <p className="text-lg font-semibold">accounts</p>
                        <p className="text-sm text-gray-600">Senectus et netus et malesuada fames ac turpis.</p>
                    </div>
                    <div className="flex flex-col items-start bg-light shadow-md py-4 px-6 rounded-md border border-gray-300 h-42">
                    <AiOutlineMobile className='h-10 w-10 p-2 text-green-500 bg-green-100 rounded-full' />
                        <p className="text-lg font-semibold mt-2">Saving</p>
                        <p className="text-lg font-semibold">accounts</p>
                        <p className="text-sm text-gray-600">Senectus et netus et malesuada fames ac turpis.</p>
                    </div>
                    <div className="flex flex-col items-start bg-light shadow-md py-4 px-6 rounded-md border border-gray-300 h-42">
                    <GoGraph className='h-10 w-10 p-2 text-green-500 bg-green-100 rounded-full' />
                        <p className="text-lg font-semibold mt-2">Saving</p>
                        <p className="text-lg font-semibold">accounts</p>
                        <p className="text-sm text-gray-600">Senectus et netus et malesuada fames ac turpis.</p>
                    </div>
                    <div className="flex flex-col items-start bg-light shadow-md py-4 px-6 rounded-md border border-gray-300 h-42">
                    <FaAddressCard className='h-10 w-10 p-2 text-green-500 bg-green-100 rounded-full' />
                        <p className="text-lg font-semibold mt-2">Saving</p>
                        <p className="text-lg font-semibold">accounts</p>
                        <p className="text-sm text-gray-600">Senectus et netus et malesuada fames ac turpis.</p>
                    </div>
                    <div className="flex flex-col items-start bg-light shadow-md py-4 px-6 rounded-md border border-gray-300 h-42">
                    <FaWifi className='h-10 w-10 p-2 text-green-500 bg-green-100 rounded-full' />
                        <p className="text-lg font-semibold mt-2">Saving</p>
                        <p className="text-lg font-semibold">accounts</p>
                        <p className="text-sm text-gray-600">Senectus et netus et malesuada fames ac turpis.</p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:mt-20">
                <img src={image} alt="Mobile Phone" className="w-64"/>
            </div>
        </section>
    );
}

export default Features;
