import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {

    const { bookingId } = useParams()
    return (
        <div className='container'>
            <h2>This is booking {bookingId}</h2>
        </div>
    );
};

export default Booking;