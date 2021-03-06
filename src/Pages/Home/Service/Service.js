import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;

    const { _id, img, name, price, description } = service;

    return (
        <div id="services" className="service">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/bookings/${_id}`}>
                <button className='btn btn-success text-center'>Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;