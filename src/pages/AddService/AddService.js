import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        axios.post('https://travel-mama-server.herokuapp.com/addplace', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Place added successfully');

                    // reset form not working
                    // using hard code
                    e.target[0].value = '';
                    e.target[1].value = '';
                    e.target[2].value = '';
                    e.target[3].value = '';
                    e.target[4].value = '';
                }
            })
    }
    return (
        <div className=' md:h-screen common-bg add-service mx-auto App py-8'>

            <div className=' md:w-1/4 mx-auto px-2 py-12 shadow-2xl common-border'>
                <h2 className='text-3xl text-white pb-8  font-bold'>Add a Travel Place</h2>
                <form className=' border-black p-2 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <input className='rounded p-1' {...register("name")} placeholder='place name' /> <br />
                    <input className='rounded p-1' {...register("price")} placeholder='price' /> <br />
                    <input className='rounded p-1' {...register("days")} placeholder='tour days' /> <br />
                    <input className='rounded p-1' {...register("img")} placeholder='place image url' /> <br />
                    <textarea className='rounded p-1' {...register("details")} placeholder="details" /> <br />
                    <input className='bg-tomato p-2 rounded text-white' type="submit" />

                </form>
            </div>
        </div>
    );
};

export default AddService;