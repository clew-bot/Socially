import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import  Auth  from './auth.js';


const RequireAuth = ({Component}) => {
    let auth = false;
    const local = localStorage.getItem('yllaicos1');
    console.log(local);
    if (local) {
        auth = true;
    }


    return auth ? <Component /> : <Navigate to="/login" />
}
export default RequireAuth