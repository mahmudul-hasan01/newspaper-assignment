import React from 'react';
import useAuth from '../../Hook/AuthHook/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth()
    if (loading) {
        return <div className='flex justify-center items-center'>Loading...</div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;