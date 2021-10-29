import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import Spinner from '../Shared/Spinner/Spinner';
import './AddBooking.css';

const AddBooking = (props) => {
    const [isLoading, setIsLoading] = useState(true)
    const { place, setPlace } = useState();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => setPlace(data);

    const { serviceId } = useParams();
    useEffect(() => {
        const url = `http://travel-mama-server.herokuapp.com/places/${serviceId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error.message))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='booking py-10'>
            <form className='flex flex-col md:w-1/3 mx-auto border-black p-2 shadow' onSubmit={handleSubmit(onSubmit)}>

                <input className='bg-current' placeholder='name' type='text' />
            </form>
        </div>

    );
};

export default AddBooking;