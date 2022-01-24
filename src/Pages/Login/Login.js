import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { handleGoogleSignin, users, LogOut } = useAuth()

    return (
        <div className='container text-center'>
            <h1>Please {users.email ? "Log Out" : "log in"}</h1>
            <h2>{users.displayName}</h2>
            <img className='py-4' src={users.photoURL} alt="" />
            <br />

            {
                users.email ? <button  onClick={LogOut}>Signout</button>
                    : <button className='btn btn-success' onClick={handleGoogleSignin}>Google sign in</button>
            }

        </div>
    );
};

export default Login;