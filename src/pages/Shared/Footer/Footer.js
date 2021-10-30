import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" class="bg-gray-500">
            <div class="container mx-auto pt-8 pb-4">

                <div class="flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2">

                    <div class="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
                        <img style={{ maxWidth: '70%' }} className="h-auto" src="https://pngimage.net/wp-content/uploads/2019/05/fake-logo-png-.png" alt="Logo" />
                    </div>

                    <div class="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">


                        <h4 class="text-white">Important</h4>
                        <ul class="nav navbar-nav">
                            <li class="leading-7 text-sm">
                                <a class="text-white underline text-small" href="/page-1">
                                    Page 1 </a>
                            </li>
                            <li class="leading-7 text-sm"><a class="text-white underline text-small" href="/page-2">Page 2</a></li>
                        </ul>


                    </div>

                    <div class="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
                        <h4 class="text-white">Info</h4>
                        <ul class="">
                            <li class="leading-7 text-sm">
                                <a class="text-white underline text-small" href="/page-1">
                                    Page 1 </a>
                            </li>
                            <li class="leading-7 text-sm"><a class="text-white underline text-small" href="/page-2">Page 2</a></li>
                        </ul>
                    </div>

                    <div class="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">

                        <h4 class="text-white">Products</h4>
                        <ul class="">
                            <li class="leading-7 text-sm">
                                <a class="text-white underline text-small" href="/page-1">
                                    Page 1 </a>
                            </li>
                            <li class="leading-7 text-sm"><a class="text-white underline text-small" href="/page-2">Page 2</a></li>
                        </ul>
                    </div>

                </div>

                <div class="pt-4 md:flex md:items-center md:justify-center " style={{ borderTop: '1px solid white' }} >
                    <ul class="">
                        <li class="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><a class="text-white underline text-small" href="/disclaimer">Disclaimer</a></li>
                        <li class="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><a class="text-white underline text-small" href="/cookie">Cookie policy</a></li>
                        <li class="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><a class="text-white underline text-small" href="/privacy">Privacy</a></li>
                    </ul>
                </div>
            </div>



        </footer>
    );
};

export default Footer;