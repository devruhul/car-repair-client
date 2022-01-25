import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {

    const { users } = useAuth()
    const location = useLocation()

    if (users.email) {
        return children;
    }

    return <Navigate
        to="/login"
        state={{ from: location }}
    />;

};

export default PrivateRoute;