import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Spinner from '../Shared/Spinner/Spinner';
import './AddBooking.css';

const AddBooking = (props) => {
    const history = useHistory();
    const { user } = useAuth()
    const [isLoading, setIsLoading] = useState(true)
    const [place, setPlace] = useState();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.status = 'pending';
        data.price = place.price;
        data.days = place.days;
        axios.post('https://travel-mama-server.herokuapp.com/addbooking', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booking added successfully');
                    history.push('/mybooking');
                }
            })


    };

    const { serviceId } = useParams();
    useEffect(() => {
        const url = `https://travel-mama-server.herokuapp.com/places/${serviceId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setPlace(data))
            .catch(error => console.log(error.message))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='booking h-screen App py-10'>
            <div>
                <div className='md:shadow-2xl md:w-2/5  md:mx-auto max-w-md w-full py-20'>
                    <h2 className='text-3xl text-gray-800 pb-8  font-bold'>Add Booking Details</h2>
                    <form className=' border-black p-2' onSubmit={handleSubmit(onSubmit)}>
                        <input className='rounded p-1' {...register("userName")} defaultValue={user.displayName} /> <br />
                        <input className='rounded p-1' {...register("email")} defaultValue={user.email} /> <br />
                        <input className='rounded p-1' {...register("placeName")} defaultValue={place.name} /> <br />
                        <input className='rounded p-1' {...register("img")} defaultValue={place.img} /> <br />
                        <input className='rounded p-1' {...register("address")} placeholder="Address" /> <br />
                        <input className='rounded p-1' {...register("mobile")} placeholder="mobile number" /> <br />

                        <input className='bg-tomato p-2 rounded text-white' type="submit" />

                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddBooking;