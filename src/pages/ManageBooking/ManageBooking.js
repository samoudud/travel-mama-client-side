import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Spinner from '../Shared/Spinner/Spinner';

const ManageBooking = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = `https://travel-mama-server.herokuapp.com/managebooking`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
                console.log(data)
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
        <div className='common-bg md:h-screen'>
            <h2 className='text-2xl'>Manage All Booking</h2>
        </div>
    );
};

export default ManageBooking;