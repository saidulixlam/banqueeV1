import React from 'react';
import Card from './Card';

const open = () => {
    return (
        <section className="bg-white h-screen flex flex-col items-center mt-10 sm:mx-10 sm:mt-20">
            <div className="w-full p-6 lg:mx-24 text-center">
                <span className="text-sm text-gray-500  text-muted">Account</span>
                <h2 className="text-4xl font-bold mt-2">Perfect card</h2>
                <h2 className="text-4xl font-bold my-2">for your needs.</h2>
                <p className="text-sm text-gray-600 mx-10">Senectus et netus et malesuada  
                medusa lemo fames ac turpis.</p>

            </div>
            <div className="w-full flex justify-center mt-20 relative">
                <div className='mt-4 absolute'>
                    <Card bgColor="bg-gray-800" textColor="white" />
                </div>


                <div className='mt-20 absolute'>
                    <Card bgColor="bg-teal-500" textColor="white" />
                </div>

                <div className='mt-36 absolute'>
                    <Card bgColor="bg-yellow-400" textColor="gray-900" />
                    
                </div>
                
            </div>
            <div className="flex justify-center space-x-4 mt-96">
                    <a href="open-account" className="bg-green-500 text-white p-3 rounded-md text-md font-medium">Open Account</a>
                    <a href="compare-cards" className="text-green-500 border border-green-500 p-3 rounded-md text-md font-medium">Compare Cards</a>
                </div>
            
        </section>
    );
}

export default open;
