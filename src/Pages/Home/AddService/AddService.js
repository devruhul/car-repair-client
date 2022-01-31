import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('service added succesfully')
                    reset()
                }
            })

    };
    return (
        <div id="add-service" className='text-center'>
            <h2>This is add new service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder='Service name' /> <br />
                <input {...register("description")} placeholder='Service description' /> <br />
                <input type="number" {...register("price")} placeholder=' service price' /> <br />
                <input {...register("img")} placeholder='place service img url' /> <br /> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;