import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import  Auth  from './auth.js';


const RequireAuth = ({Component}) => {
    let apiAuth = false;
    const authChecker = async () => {
        let id = localStorage.getItem('yllaicos1');
        const response = await fetch('/api/auth/check', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id}),
        });
        const data = await response.json();
        console.log("the data", data);
        return data.loggedIn;
    }

    let auth = false;
    const local = localStorage.getItem('yllaicos1');
    let auther = authChecker();
    console.log(auth, apiAuth)
    if (local && auther) {
        auth = true;
    }


    return auth ? <Component /> : <Navigate to="/login" />
}
export default RequireAuth