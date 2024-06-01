import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import image from '../utils/mobile.jpg';
import { useState } from 'react';
import Footer from "./Footer";

const blogs = [
    {
        title: "Understanding the Basics of Online Banking",
        image: "https://www.paisabazaar.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/01/Picture1-1.png.webp",
        description: "Online banking offers convenience and security. Learn the basics to get started with your online banking journey."
    },
    {
        title: "Top 10 Features of Our Mobile App",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzYY6D-YFkxRcFO9yacbXQOi4FI0UOslFCgg&s",
        description: "Explore the top features of our mobile app that make banking easy and accessible for everyone."
    },
    {
        title: "How to Stay Safe While Banking Online",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE2HA0atbYcgax6OjQsExdLK4XXDugVMkRWQ&s",
        description: "Your security is our priority. Follow these tips to stay safe while conducting your banking online."
    }
];

const Contact = () => {
    const [faq, setFaq] = useState([
        { question: "How do I open an account?", answer: "You can open an account by downloading our app from the App Store or Google Play Store and following the on-screen instructions.", isOpen: false },
        { question: "How do I reset my password?", answer: "You can reset your password by clicking on 'Forgot Password' on the login screen and following the instructions.", isOpen: false },
        { question: "What are the fees for international transfers?", answer: "Our fees for international transfers vary depending on the destination and amount. Please refer to our pricing page for detailed information.", isOpen: false },
        { question: "How do I contact customer support?", answer: "You can contact customer support via our hotline at 1234567890 or by email at help@banquee.com.", isOpen: false },
        { question: "What are the supported currencies?", answer: "We support a wide range of currencies including USD, EUR, GBP, and many more. Please refer to our supported currencies page for the full list.", isOpen: false },
    ]);

    const toggleFaq = (index) => {
        setFaq(faq.map((item, i) => (
            i === index ? { ...item, isOpen: !item.isOpen } : item
        )));
    };

    return (
        <>
            <section className="mt-10">
                <div className="bg-teal-500 flex flex-col lg:flex-row items-center justify-between rounded-md lg:mx-32 md:mx-16 mx-8 p-6 relative overflow-hidden">
                    <div className="text-left p-6 lg:w-1/2">
                        <h2 className="text-3xl font-bold">One app.</h2>
                        <h2 className="text-3xl font-bold">One banking.</h2>
                        <p className="mb-4">
                            Easily send and receive money instantly, experience seamless transactions with top-notch security and efficiency.
                        </p>
                        <div className="flex justify-start space-x-4">
                            <a href="open-account" className="bg-black text-white px-6 py-3 rounded-md text-lg font-medium flex flex-col items-center">
                                <span>Get it on</span>
                                <p>App Store</p>
                            </a>
                            <a href="open-account" className="bg-black text-white px-6 py-3 rounded-md text-lg font-medium flex flex-col items-center">
                                <span>Get it on</span>
                                <p>Google Play</p>
                            </a>
                        </div>
                    </div>
                    <div className="relative lg:w-1/2 flex justify-end p-6">
                        <div className="absolute top-8  h-full bg-teal-500">
                            <img src={image} alt="Mobile Phone" className="mt-20 transform -translate-y-1/2 right-[-50%] w-64" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-start justify-between rounded-md lg:mx-32 md:mx-16 mx-8 p-6 mt-6">
                    <div className="flex flex-col text-left lg:w-1/2">
                        <h2 className="text-5xl font-bold my-6">Need help ?</h2>
                        <div className="flex gap-4 items-center mb-6">
                            <IoMdCall className="h-10 w-10 p-2 text-green-600 bg-green-200 rounded-full" />
                            <div className="flex flex-col text-left">
                                <p>1234567890</p>
                                <span className="text-xs text-gray-500">Support hotline</span>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center mb-6">
                            <MdEmail className="h-10 w-10 p-2 text-green-600 bg-green-200 rounded-full" />
                            <div className="flex flex-col text-left">
                                <p>help@banquee.com</p>
                                <span className="text-xs text-gray-500">Support email</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold my-6">Frequently Asked Questions</h2>
                        {faq.map((item, index) => (
                            <div key={index} className="mb-4">
                                <div
                                    className="flex justify-between items-center cursor-pointer p-4 bg-gray-100 rounded-md"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h3 className="text-lg font-semibold">{item.question}</h3>
                                    <span>{item.isOpen ? '-' : '+'}</span>
                                </div>
                                {item.isOpen && (
                                    <div className="p-4 bg-white border rounded-md mt-2">
                                        <p className="text-gray-600">{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-gray-100 lg:mx-32 md:mx-16 mx-8 p-6 my-6 rounded-md">
                    <h2 className="text-3xl font-bold my-6">Latest Blogs</h2>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((blog, index) => (
                            <div key={index} className="bg-white p-4 rounded-md shadow-md">
                                <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-md mb-4" />
                                <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
                                <p className="text-gray-600">{blog.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contact;
