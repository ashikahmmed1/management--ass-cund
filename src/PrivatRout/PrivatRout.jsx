import React, { use } from 'react';
import { AuthContext } from '../context/AuthProvider';
import Loader from '../component/Loaders/Loader';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const {user, loading} = use(AuthContext)
    const location = useLocation();
    
    

    if(loading){
        return <Loader />
    }

    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoute;