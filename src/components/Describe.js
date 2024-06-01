import React from 'react';
import { IoIosLaptop } from "react-icons/io";
import { RiMotorbikeFill } from "react-icons/ri";
import { MdOutlineFlight } from "react-icons/md";
import { FaCameraRetro } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiXiaomi } from "react-icons/si";
import { SiCommerzbank } from "react-icons/si";
import { FaShopify } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa6";
import { GrVisa } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { FaCcMastercard } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import { SiHdfcbank } from "react-icons/si";
import { CiCircleMore } from "react-icons/ci";
const Describe = () => {
    return (
        <div>
            <section className="bg-green-50 p-4 flex flex-col justify-center items-center mt-10 sm:flex-row sm:mt-20 my-5">
                <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start mx-32 p-6">
                    <h2 className="text-3xl font-bold my-3 text-center sm:text-left">Send & Receive</h2>
                    <h2 className="text-3xl font-bold mb-2 text-center sm:text-left">Money Instantly</h2>
                    <div className="text-center sm:text-left">
                        <p className="mb-4">
                            Easily send and receive money instantly,experience seamless transactions with top-notch security and efficiency.
                        </p>
                        <div className="mb-2 flex gap-4 items-center">
                            <span>
                                <IoMdCheckmark className='h-8 w-8 z-10 p-1 text-white bg-green-500 rounded-full' />
                            </span>
                            <span>
                                Better security
                            </span>
                        </div>
                        <div className="mb-2 flex gap-4 items-center">
                            <span>
                                <IoMdCheckmark className='h-8 w-8 z-10 p-1 text-white bg-green-500 rounded-full' />
                            </span>
                            <span>
                                Better speed
                            </span>
                        </div>
                        <div className="mb-2 flex gap-4 items-center">
                            <span>
                                <IoMdCheckmark className='h-8 w-8 z-10 p-1 text-white bg-green-500 rounded-full' />
                            </span>
                            <span>
                                Better quality
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-10 sm:mt-0 sm:w-1/2 flex flex-col gap-4 items-center">
                    <div className="flex justify-between items-center rounded-md border border-gray-300 bg-white shadow-md px-4 py-2 w-80">
                        <p className="mr-4">
                            <FaApple className='h-10 w-10 p-2 text-white bg-green-500 rounded-md' />
                        </p>
                        <div className="flex flex-col items-start">
                            <p className="text-lg font-semibold">Apple</p>
                            <p className="text-sm text-gray-600">Macbook</p>
                        </div>
                        <div className="text-lg font-semibold">
                            -990$
                        </div>
                    </div>
                    <div className="flex justify-between items-center rounded-md border border-gray-300 bg-white shadow-md px-4 py-2 w-80">
                        <p className="mr-4">
                            <FaAmazon className='h-10 w-10 p-2 text-white bg-blue-300 rounded-md' />
                        </p>
                        <div className="flex flex-col items-start">
                            <p className="text-lg font-semibold">Amazon</p>
                            <p className="text-sm text-gray-600">Gadget</p>
                        </div>
                        <div className="text-lg font-semibold">
                            -990$
                        </div>
                    </div>
                    <div className="flex justify-between items-center rounded-md border border-gray-300 bg-white shadow-md px-4 py-2 w-80">
                        <p className="mr-4">
                            <FaTwitter className='h-10 w-10 p-2 text-white bg-black rounded-md' />
                        </p>
                        <div className="flex flex-col items-start">
                            <p className="text-lg font-semibold">Twitter</p>
                            <p className="text-sm text-gray-600">Ads</p>
                        </div>
                        <div className="text-lg font-semibold">
                            -590$
                        </div>
                    </div>
                    <div className="flex justify-between items-center rounded-md border border-gray-300 bg-white shadow-md px-4 py-2 w-80">
                        <p className="mr-4">
                            <SiXiaomi className='h-10 w-10 p-2 text-white bg-red-500 rounded-md' />

                        </p>
                        <div className="flex flex-col items-start">
                            <p className="text-lg font-semibold">Xiaomi</p>
                            <p className="text-sm text-gray-600">Smartphone</p>
                        </div>
                        <div className="text-lg font-semibold">
                            -799$
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="bg-white mt-10">
                <div className="lg:mx-32 md:mx-16 sm :mx-8 p-6 mt-14">
                    <div className='text-left my-4'>
                        <span className='text-sm text-muted'>Saving Accounts</span>
                        <h2 className="text-3xl font-bold">Organize your</h2>
                        <h2 className="text-3xl font-bold ">Money the right way</h2>
                        <p className='text-sm-my-4'>Lorem epsum na eba rthe fkid</p>
                        <div className='flex justify-between'>
                            <p className='text-sm'>Lorem epsum rthe fkid</p>
                            <p className='text-sm text-green-500'>All features --- arrow </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between gap-4">
                        <div className="rounded-md py-4">

                            <div className="flex w-36 h-36 border border-gray-500 bg-green-100 opacity-100 shadow-md items-center justify-center rounded-md mb-4">
                                <IoIosLaptop className="h-12 w-20 text-blue-500" />
                            </div>

                            <h3 className="w-28 text-lg font-semibold">New Laptop</h3>
                            <p className="w-28 text-sm text-muted mb-2">400$</p>
                        </div>
                        <div className="rounded-md p-4">
                            <div className="flex w-36 h-36 border border-gray-500 shadow-md items-center justify-center bg-red-100 rounded-md mb-4">
                                <RiMotorbikeFill className="h-12 w-20 text-red-700" />
                            </div>

                            <h3 className="w-28 text-lg font-semibold">New bike</h3>
                            <p className="w-28 text-sm text-muted mb-2">250$</p>
                        </div>

                        <div className="rounded-md p-4">
                            <div className="flex w-36 h-36 border border-gray-500 shadow-md items-center justify-center bg-yellow-100 rounded-md mb-4">
                                <MdOutlineFlight className="h-12 w-20 text-yellow-500" />
                            </div>

                            <h3 className="w-28 text-lg font-semibold">Holiday</h3>
                            <p className="w-28 text-sm text-muted mb-2">14550$</p>
                        </div>

                        <div className="rounded-md p-4">
                            <div className="flex w-36 h-36 border border-gray-500 shadow-md items-center justify-center bg-violet-200 rounded-md mb-4">
                                <FaCameraRetro className="h-12 w-20 text-violet-700" />
                            </div>

                            <h3 className="w-28 text-lg font-semibold">Camera</h3>
                            <p className="w-28 text-sm text-muted mb-2">850$</p>
                        </div>

                        <div className="rounded-md p-4">
                            <div className="flex w-36 h-36 border border-gray-500 shadow-md items-center justify-center bg-gray-100 rounded-md mb-4">
                                <IoMdAdd className="h-12 w-20 text-green-300" />
                            </div>

                            <h3 className="w-28 text-lg font-semibold">Add new</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-4 flex flex-col justify-center mt-10 sm:flex-row sm:mt-20 mb-5">
                <div className="w-full sm:w-1/2 flex flex-col lg:items-start sm:items-start lg:ml-32 p-6">
                    <span className="text-sm  text-muted text-left">Notification</span>
                    <h2 className="text-3xl font-bold mb-2 sm:text-left">Stay notified</h2>
                    <div className="sm:text-left">
                        <p className="">
                            Easily send and receive money instantly,experience
                        </p>
                        <p className="mb-4">
                            seamless  transactions with top-notch security and efficiency.

                        </p>
                        <div className="mb-2 flex gap-4 items-center">
                            <span>
                                <IoMdCheckmark className='h-8 w-8 z-10 p-1 text-white bg-green-500 rounded-full' />
                            </span>
                            <span>
                                Stay active
                            </span>
                        </div>
                        <div className="mb-2 flex gap-4 items-center">
                            <span>
                                <IoMdCheckmark className='h-8 w-8 z-10 p-1 text-white bg-green-500 rounded-full' />
                            </span>
                            <span>
                                Keep sending
                            </span>
                        </div>
                        <div className="mb-2 flex gap-4 items-center">
                            <span>
                                <IoMdCheckmark className='h-8 w-8 z-10 p-1 text-white bg-green-500 rounded-full' />
                            </span>
                            <span>
                                Always check
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-10 sm:mt-0 sm:w-1/2 flex flex-col gap-4 items-center">
                    <div className="flex items-center rounded-md border border-gray-300 bg-white shadow-md px-4 p-2 w-96">
                        <p className="mr-4">
                            <SiCommerzbank className='h-10 w-10 p-2 text-white bg-green-500 rounded-md' />
                        </p>
                        <div>
                            <p className="text-bold text-green-700">Banko.</p>
                            <span className='text-sm text-muted text-gray-500'> Your payment of $49 has been processed!</span>
                        </div>
                    </div>
                    <div className="flex items-center rounded-md border border-gray-300 bg-white shadow-md px-4 p-2 w-96">
                        <p className="mr-4">
                            <SiCommerzbank className='h-10 w-10 p-2 text-white bg-green-500 rounded-md' />
                        </p>
                        <div>
                            <p className="text-bold text-green-700">Banko.</p>
                            <span className='text-sm text-muted text-gray-500'> Your got a new support message!</span>
                        </div>
                    </div>
                    <div className="flex items-center rounded-md border border-gray-300 bg-white shadow-md px-4 p-2 w-96">
                        <p className="mr-4">
                            <SiCommerzbank className='h-10 w-10 p-2 text-white bg-green-500 rounded-md' />
                        </p>
                        <div>
                            <p className="text-bold text-green-700">Banko.</p>
                            <span className='text-sm text-muted text-gray-500'> Your payment was declined!</span>
                        </div>
                    </div>
                    <div className="flex items-center rounded-md border border-gray-300 bg-white shadow-md px-4 p-2 w-96">
                        <p className="mr-4">
                            <SiCommerzbank className='h-10 w-10 p-2 text-white bg-green-500 rounded-md' />
                        </p>
                        <div>
                            <p className="text-bold text-green-700">Banko.</p>
                            <span className='text-sm text-muted text-gray-500'> Please verify your payment of $49!</span>
                        </div>
                    </div>
                    <div className="flex items-center rounded-md border border-gray-300 bg-white shadow-md px-4 p-2 w-96">
                        <p className="mr-4">
                            <SiCommerzbank className='h-10 w-10 p-2 text-white bg-green-500 rounded-md' />
                        </p>
                        <div>
                            <p className="text-bold text-green-700">Banko.</p>
                            <span className='text-sm text-muted text-gray-500'> Please check for your updates!</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className='logo my-10 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 p-6 lg:mx-36 sm:mx-4'>
                <div className='p-2 h-12 bg-gray-200 rounded-md flex items-center gap-2'>
                    <IoMdCheckmark className='h-8 w-8 z-10 p-1 text-white bg-green-500 rounded-full' />
                    <span className='font-bold'>
                        Correct
                    </span>
                </div>

                <div className='p-2 h-12 bg-slate-200 rounded-md flex items-center gap-2'>
                    <FaShopify className='h-8 w-8 z-10 p-1 text-white bg-green-500 rounded-full' />
                    <span className='font-bold'>
                        Shopify
                    </span>
                </div>

                <div className='p-2 h-12 bg-slate-300 rounded-md flex items-center gap-2'>
                    <FaBitcoin className='h-8 w-8 z-10 p-1 text-white bg-yellow-600 rounded-full' />
                    <span className='font-bold'>
                        Bitcoin
                    </span>
                </div>

                <div className='p-2 h-12 bg-slate-300 rounded-md flex items-center gap-2'>
                    <GrVisa className='h-8 w-8 z-10 p-1 text-white bg-blue-700 rounded-full' />
                    <span className='font-bold'>
                        Visa
                    </span>
                </div>
                <div className='p-2 h-12 bg-slate-300 rounded-md flex items-center gap-2'>
                    <FaCcMastercard className='h-10 w-10 text-black  rounded-full' />
                    <span className='text-sm font-bold'>
                        Mastercard
                    </span>
                </div>
                <div className='p-2 h-12 bg-slate-300 rounded-md flex items-center gap-2'>
                    <FcGoogle className='h-8 w-8 z-10 p-1 text-white rounded-full' />
                    <span className='font-bold'>
                        Pay
                    </span>
                </div>
                <div className='p-2 h-12 bg-slate-300 rounded-md flex items-center gap-2'>
                    <span className='font-bold'>
                        Amazon
                    </span>
                    <FaAmazonPay className='h-8 w-8 z-10 p-1 text-black rounded-full' />

                </div>

                <div className='p-2 h-12 bg-slate-300 rounded-md flex items-center gap-2'>
                    <SiHdfcbank className='h-8 w-8 z-10 p-1 text-blue-600 rounded-full' />
                    <span className='font-bold'>
                        Bank
                    </span>
                </div>

                <div className='p-2 h-12 bg-slate-300 rounded-md flex items-center gap-2'>
                    <CiCircleMore className='h-8 w-8 z-10 p-1 text-blue-600 rounded-full' />
                    <span className='font-bold'>
                        More..
                    </span>
                </div>
            </div>

            <div className="p-4 flex items-center justify-around mt-10 sm:flex-row sm:mt-20 mb-5">
                <div className="w-full sm:w-1/2 flex flex-col lg:items-start sm:items-start p-6 lg:mx-32">
                    <span className="text-sm text-gray-500  text-muted text-left">Tools</span>
                    <h2 className="text-3xl font-bold mb-2 sm:text-left">Seemless</h2>
                    <h2 className="text-3xl font-bold mb-2 sm:text-left">integration</h2>
                    <div className="sm:text-left">
                        <p className="">
                            Easily send and receive money instantly,experience
                        </p>
                        <p className="mb-4">
                            seamless  transactions with top-notch security.

                        </p>
                    </div>
                </div>
                <div className="sm:text-left lg:mx-32">

                    <div className="mb-2 flex gap-4 items-center">
                        <span>
                            <IoMdCheckmark className='h-9 w-9 z-10 p-2 text-green-700 bg-green-200 rounded-full' />
                        </span>
                        <span>
                            Secure and encrypted integration
                        </span>
                    </div>
                    <div className="mb-2 flex gap-4 items-center">
                        <span>
                            <IoMdCheckmark className='h-9 w-9 z-10 p-2 text-green-700 bg-green-200 rounded-full' />
                        </span>
                        <span>
                            Fully API interface
                        </span>
                    </div>
                    <div className="mb-2 flex gap-4 items-center">
                        <span>
                            <IoMdCheckmark className='h-9 w-9 z-10 p-2 text-green-700 bg-green-200 rounded-full' />
                        </span>
                        <span>
                            Payment anywhere anyone
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Describe;
