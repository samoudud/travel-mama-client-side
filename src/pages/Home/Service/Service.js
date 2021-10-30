import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ place }) => {
    const { name, price, days, img, _id } = place;

    return (
        <div className='shadow-lg'>
            <img src={img} alt="" />
            <div className='hover:bg-red-500 hover:text-white p-5'>
                <h4 className='text-2xl'>{name}</h4>
                <div className='flex align-center justify-between'>
                    <div>
                        <p>From ${price}</p>
                        <p>{days} days, {parseInt(days) + 1} night</p>
                    </div>
                    <div>
                        <Link to={`/addbooking/${_id}`}>
                            <button className='bg-tomato text-white p-3 hover:border-white rounded'>Book Now <i className="fas fa-arrow-right"></i></button>
                        </Link>

                    </div>

                </div>
            </div>
        </div >
    );
};

export default Service;