import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateOutlet = () => {

    const { users } = useAuth()
    const location = useLocation()

    return users?.email ? <Outlet /> :
        <Navigate
            to="/login"
            state={{ from: location }}
        />
};

export default PrivateOutlet;