import React, { useState, useEffect } from 'react'
import { Header, HeaderLink } from "../../styled/homepage.styled";
import { RiDashboardFill, RiLogoutBoxRFill, RiHomeSmile2Fill } from 'react-icons/ri';

const GlobalHeader = () => {

  const [logged, setLogged] = useState(false);
  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout');
      const data = await response.json();
      localStorage.removeItem('yllaicos1');
      setLogged(false);
      console.log(data);
      alert("You have been logged out", data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    if (localStorage.getItem('yllaicos1')) {
      setLogged(true);
      console.log(logged)
    }
  }, [logged])


  return (
    <Header>
      <HeaderLink to={"/"}>Socially</HeaderLink>
      {logged ? 
      <div className="icons-section">
      <RiDashboardFill size={"2rem"} color={"#6B46C1"}/> 
      <RiLogoutBoxRFill onClick={handleLogout} size={"2rem"} color={"#6B46C1"}/> 
      </div> 
      : 
      <RiHomeSmile2Fill/>}
      </Header>
  )
}

export default GlobalHeader