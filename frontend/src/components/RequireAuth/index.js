import React from 'react';
import { Navigate } from 'react-router-dom';


const RequireAuth = ({Component}) => {
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
        return data.loggedIn;
    }
    let auth = false;
    const local = localStorage.getItem('yllaicos1');
    let auther = authChecker();
    if (local && auther) {
        auth = true;
    }
    return auth ? <Component /> : <Navigate to="/login" />
}
export default RequireAuth