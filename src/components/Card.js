import React from 'react';

const Card = ({ bgColor, textColor }) => {
    return (
        <div className={`shadow-md rounded-lg p-4 w-72 h-56 ${bgColor} text-${textColor} flex flex-col justify-between`}>
            <div className="font-bold text-lg text-left mx-6 flex justify-between">
                <div>banquee.</div>
                <div className="flex justify-end items-end mb-4 ml-6">
                X
            </div>
            </div>
            <div className="text-xl text-left mx-6">1234&nbsp; 5678 9012 3456</div>
            <div className='flex'>
                <div className="text-xs text-light-500 mb-2 mx-6">
                    <span style={{ fontSize: '0.6rem' }} className='text-xs text-gray-100'>Card Holder</span>
                    <div>John Doe</div>
                </div>

                <div className="text-xs text-light-500 mb-2 mx-6">
                    <span style={{ fontSize: '0.6rem' }} className='text-xs text-gray-100'>Expiry Date</span>
                    <div>09/28</div>
                </div>
                <div className="flex justify-end items-end mb-4 ml-3">
                X
            </div>
            </div>
            
        </div>
    );
}

export default Card;
