import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const {user}=UserAuth();

if(!user){
    return <Navigate to="/"></Navigate>
}
return children
};

//to make the profile protected and it does not work until the user log in

 

export default ProtectedRoute