import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-6">
                <div className="mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold mb-4">Banquee</h3>
                    <p className="text-sm">Easily send and receive money instantly, experience,</p> 
                    <p className="text-sm">seamless transactions with top-notch security and efficiency.</p>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-12">
                    <div className="mb-6 md:mb-0">
                        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Services</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook className="h-6 w-6" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter className="h-6 w-6" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram className="h-6 w-6" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin className="h-6 w-6" /></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                        <p className="text-sm">1234567890</p>
                        <p className="text-sm">help@banquee.com</p>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-4">
                <p className="text-center text-gray-500 text-sm">&copy; 2023 Banquee. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
