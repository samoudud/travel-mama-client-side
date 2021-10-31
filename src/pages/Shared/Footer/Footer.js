import React from 'react';
import logo from '../../../images/logo.png';

const Footer = () => {
    return (
        <footer id="footer" class="bg-gray-900 text-white">
            <div class="flex flex-wrap justify-center p-6 md:w-3/4 mx-auto">
                <div class="flex flex-wrap mb-4 w-full">
                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 py-4 pl-8">
                        <img className='md:w-3/4 ' src={logo} alt="" />
                        <p className=' mx-auto pt-4'>Travel Mama is one of few travel companies in Bangladesh working on the field of sustainable tourism.</p>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 pl-8">
                        <h3 class="text-3xl text-tomato py-4">Quick Links</h3>
                        <ul>
                            <li>Home</li>
                            <li>Term</li>
                            <li>Privacy & Policy</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 pl-8 ">
                        <h3 class="text-3xl text-tomato py-4">About Us</h3>
                        <ul>
                            <li>Our Story</li>
                            <li>Travel Blog & Tips</li>
                            <li>Working With Us</li>
                            <li>Tour Guid</li>
                            <li>Be Our Partner</li>
                        </ul>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 pl-8">
                        <h3 class="text-3xl text-tomato py-4">Support</h3>
                        <ul>
                            <li>Customer Support</li>
                            <li>Privacy & Policy</li>
                            <li>Terms & Condition</li>
                            <li>Forum</li>
                            <li>Tour Guid</li>
                        </ul>
                    </div>
                </div>
                <p class="bottom mt-4">Copyright @ 2021 Travel Mama all right reserved.</p>
            </div>


        </footer>
    );
};

export default Footer;