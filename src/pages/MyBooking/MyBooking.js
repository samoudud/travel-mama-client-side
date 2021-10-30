import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import BookedItem from '../BookedItem/BookedItem';
import Spinner from '../Shared/Spinner/Spinner';

const MyBooking = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = `https://travel-mama-server.herokuapp.com/mybookings/${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
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
        <div className=' common-bg md:h-screen'>
            <div className='App p-10'>
                <h2 className='text-4xl font-bold text-tomato'>Your Bookings</h2>
                <div className='md:w-1/2 md:mx-auto md:flex flex-wrap'>
                    {
                        bookings.map(booking => <BookedItem key={bookings._id} booking={booking} handleRemove={handleRemove} ></BookedItem>)
                    }
                </div>
            </div>
        </div >
    );
};

export default MyBooking;