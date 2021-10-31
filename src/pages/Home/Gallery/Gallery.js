import React from 'react';

const Gallery = () => {
    return (
        <div className=' my-20'>
            <div className='App'>
                <h5 className='text-tomato text-xl'>Tour Gallery</h5>
                <h2 className='text-4xl font-medium  App sm:w-full md:w-1/2  mx-auto'>Best Tourist's Shared<br />Photos</h2>
            </div>
            <div className='md:grid grid-cols-1 md:grid-cols-4 my-12'>
                <img src="https://i.ibb.co/4d8dTpD/1.jpg" alt="" />
                <img src="https://i.ibb.co/5xCnxq1/2.jpg" alt="" />
                <img src="https://i.ibb.co/qsYLbnq/3.jpg" alt="" />
                <img src="https://i.ibb.co/QP9JxZN/4.jpg" alt="" />
            </div>
        </div>
    );
};

export default Gallery;


/* 
https://i.ibb.co/QP9JxZN/4.jpg
https://i.ibb.co/qsYLbnq/3.jpg
https://i.ibb.co/5xCnxq1/2.jpg
https://i.ibb.co/4d8dTpD/1.jpg
 */