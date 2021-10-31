import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo.png';

const NavBar = () => {
    const { user, logOut } = useAuth()
    return (
        <nav className="bg-gray-900">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="hidden lg:block h-8 w-auto" src={logo} alt="Workflow" />
                        </div>
                        <div className="hidden sm:block sm:ml-6">


                            <div className="flex items-center space-x-4">
                                <Link to="/home" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</Link>
                                <Link as={HashLink} to="/home#packages" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Packages</Link>
                                {
                                    user?.email && <div>
                                        <Link to="/mybooking" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">My Booking</Link>
                                        <Link to="/managebooking" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Manage Booking</Link>
                                        <Link to="/addservice" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Add Service</Link>
                                    </div>
                                }
                            </div>

                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {
                            user?.email ? <div className='flex align-center'>
                                <p className='p-2 text-white border-2 mx-2 rounded-full'>{user.displayName}</p>
                                <button onClick={logOut} className='text-white bg-tomato p-2  rounded '>Log Out </button>
                            </div> : <Link to='/login'><button className='text-white bg-tomato p-2  rounded '>Login </button></Link>
                        }
                    </div>
                </div>
            </div>


            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link to="/home" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</Link>
                    {
                        user.email && <div>
                            <Link to="/mybooking" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">My Booking</Link>
                            <Link to="/managebooking" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Manage Booking</Link>
                            <Link to="/addservice" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Add Service</Link>
                        </div>
                    }
                </div>
            </div>
        </nav>
    );
};

export default NavBar;