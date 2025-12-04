import React, { use } from 'react'
import { AuthContext } from '../Pages/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from './Loader';

const PrivetRoute = ({children}) => {
    const {user, loading} = use(AuthContext);

    const location = useLocation();
    if(loading){
        return <Loader></Loader>
    }
    if(!user){
        return <Navigate to="/login" replace state={location?.pathname}></Navigate>;
    }
    return children;
}

export default PrivetRoute