import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner App'>
            <h1 className='text-5xl font-bold text-white '>Travel To The Beautiful Place</h1>
            <div className='mt-2'>
                <input className='p-2 rounded' type="text" placeholder='type a destination' /> <button className='bg-tomato rounded text-white p-2'>Search</button>
            </div>
        </div>
    );
};

export default Banner;