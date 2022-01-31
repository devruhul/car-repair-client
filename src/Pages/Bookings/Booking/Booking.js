import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {

    const [service, setService] = useState({})
    const { bookingId } = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/services/${bookingId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [bookingId])

    return (
        <div className='text-center'>
            <h2>This is booking {bookingId}</h2>
            <h2>Details of {service.name}</h2>
            

        </div>
    );
};

export default Booking;