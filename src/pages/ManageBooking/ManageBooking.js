import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';
import Spinner from '../Shared/Spinner/Spinner';

const ManageBooking = () => {
    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = `https://travel-mama-server.herokuapp.com/managebooking`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
            .catch(error => console.log(error.message))
            .finally(() => setIsLoading(false));
    }, []);

    const handleRemove = id => {
        const sure = window.confirm('are you sure?');
        if (sure) {
            const url = `https://travel-mama-server.herokuapp.com/mybooking/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("Successfully deleted");
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }


    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className={`common-bg App pb-5 ${bookings.length === 0 && 'md:h-screen'}`}>
            <div className=' md:w-4/5 mx-auto  p-4'>
                {
                    bookings.length === 0 ? <h2 className='text-4xl font-bold text-white py-8'>There is no booking yet</h2> : <h2 className='text-4xl font-bold text-white py-8'>Manage All Booking</h2>
                }
                {
                    bookings.map(booking => <Booking key={booking._id} booking={booking} handleRemove={handleRemove}></Booking>)
                }
            </div>
        </div>
    );
};

export default ManageBooking;