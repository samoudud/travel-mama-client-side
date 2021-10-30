import React, { useState } from 'react';

const Booking = ({ booking, handleRemove }) => {
    const { _id, placeName, email, date } = booking;

    const [status, setStatus] = useState(booking.status);

    const handleUpdateUser = () => {
        if (booking.status === 'pending') {
            booking.status = 'approved';

            const url = `https://travel-mama-server.herokuapp.com/bookings/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(booking)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        setStatus(booking.status);
                        alert('Updated successfully')
                    }
                })

        }
        else {
            alert('already approved');
        }


    }
    return (
        <div key={_id} className='md:grid grid-cols-6  border-2 py-2 justify-evenly align-center items-center'>
            <p>{placeName}</p>
            <p>{email}</p>
            <p>{date}</p>
            <p>{status}</p>
            <button onClick={handleUpdateUser} className='bg-red-500 rounded text-white m-2 p-2'>Approve</button>
            <button onClick={() => handleRemove(_id)} className='bg-red-500 rounded text-white m-2 p-2'>Cancel</button>
        </div>
    );
};

export default Booking;