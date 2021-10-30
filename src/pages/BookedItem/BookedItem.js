import React from 'react';

const BookedItem = (props) => {
    const { placeName, status, _id, img } = props.booking;
    const { handleRemove } = props;


    return (
        <div style={{ border: '1px solid red' }} className='text-center shadow-lg bg-transparent m-6 p-5 rounded-md'>
            <img src={img} width={'100px'} className='mx-auto' alt="" />
            <p>{placeName}</p>
            <p>Status: {status}</p>
            <button onClick={() => handleRemove(_id)} className='bg-red-500 rounded text-white mt-2 p-2'>Cancel</button>
        </div>
    );
};

export default BookedItem;