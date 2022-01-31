import React, { useEffect, useState } from 'react';

const ManageServices = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // handle delete
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
            fetch(`http://localhost:5000/services/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('services deleted successfully')
                        const remaining = services.filter(service => service._id !== id)
                        setServices(remaining)
                    }
                })
        }
    }
    return (
        <div className='text-center'>
            <h2>This is manage</h2>
            {
                services.map(service => <div key={service._id}>
                    {service.name}
                    <button className='btn btn-success' >Update</button>
                    <button className='btn btn-danger' onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;