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
        <div className='booking md:h-screen App py-10'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2'>
                <div className='m-2 md:w-3/4 px-2 py-12 shadow-2xl common-border'>
                    <div className=''>
                        <img className='w-1/2 mx-auto' src={place.img} alt="" />
                    </div>
                    <div className='App m-2'>
                        <h3 className='text-3xl text-tomato'>{place.name}</h3>
                        <h4 className='text-2xl'>Package: {place.days} days, {parseInt(place.days) + 1} night</h4>
                        <h4 className='text-xl'>Package Includes: Ticket, Food, Hotel</h4>
                        <p className='m-2'>{place.details}</p>
                    </div>
                </div>
                <div className=' md:w-3/4 px-2 py-12 shadow-2xl common-border'>
                    <h2 className='text-3xl text-tomato pb-8  font-bold'>Add Booking Details</h2>
                    <form className=' border-black p-2 ' onSubmit={handleSubmit(onSubmit)}>
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