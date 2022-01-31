import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Booking = () => {

    const [service, setService] = useState({})
    const { bookingId } = useParams()
    const { register, handleSubmit } = useForm();

     // get single service data
    useEffect(() => {
        fetch(`http://localhost:5000/services/${bookingId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [bookingId])


    const handleNameChange = (e) => {
        const UpdateName = e.target.value;
        const newService = { name: UpdateName, email: service.name }
        setService(newService)

    }

    // update user
    const onSubmit = (data) => {
        axios.put(`http://localhost:5000/services/${bookingId}`, data)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    console.log(res)
                    alert('updated succesfully')
                }
            })
    };


    return (
        <div className='text-center'>
            <h2>This is booking {bookingId}</h2>
            <h2>Details of {service.name}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} onChange={handleNameChange} placeholder='Service name' value={service.name || ''} /> <br />
                <input type="submit" />
            </form>

        </div>
    );
};

export default Booking;