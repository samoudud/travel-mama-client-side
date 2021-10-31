import React, { useState } from 'react';

const Table = ({ booking, handleRemove }) => {
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
        <tr key={booking._id}>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{placeName}</p>

            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{email}</p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {date}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {status}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    <button onClick={handleUpdateUser} className='bg-red-500 rounded text-white m-2 p-2'>Approve</button>
                    <button onClick={() => handleRemove(_id)} className='bg-red-500 rounded text-white m-2 p-2'>Cancel</button>
                </p>
            </td>

        </tr>
    );
};

export default Table;