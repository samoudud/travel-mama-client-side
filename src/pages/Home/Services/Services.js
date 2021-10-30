import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Spinner from '../../Shared/Spinner/Spinner';
import Service from '../Service/Service';

const Services = () => {
    const [places, setPlaces] = useState([]);
    const { isLoading, setIsLoading } = useAuth()
    useEffect(() => {
        fetch('https://travel-mama-server.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
            .catch(error => console.log(error.message))
            .finally(() => setIsLoading(false))
    }, []);
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='  mt-12'>
            <h2 className='text-4xl font-medium  App sm:w-full md:w-1/2  mx-auto'>Tour We Provide <br />
                <span className='text-tomato'>In The World</span></h2>
            <div className='md:w-4/6 md:mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-12 '>
                {
                    places.map(place => <Service key={place._id} place={place}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;