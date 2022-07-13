import React, { useEffect, useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


const RequireAuth = ({Component}) => {
 

    let auth = false;
    const ref = useRef(auth);
    console.log("ref", ref)
    const navigate = useNavigate();
    useEffect(() => {
        console.log("yo")
      let id = localStorage.getItem('yllaicos1');
      if(id !== null) {
        ref.current = true;
      } else {
      const getAuth = async () => {
        const response = await fetch('/api/auth/check');
        const data = await response.json();
        if (data.loggedIn === false) {
          navigate('/login');
        } else {
          console.log('still logged in from session');
          localStorage.setItem('yllaicos1', data.id);
        }
      }
      getAuth();
    }

    }
    , []);
  
    return ref.current ? <Component /> : <Navigate to="/login" />
}
export default RequireAuth