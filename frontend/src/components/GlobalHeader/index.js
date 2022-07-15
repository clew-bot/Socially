import React, { useState, useEffect } from 'react'
import { Header, HeaderLink } from "../../styled/homepage.styled";
import { Link } from "react-router-dom";
import { RiDashboardFill, RiLogoutBoxRFill, RiHomeSmile2Fill } from 'react-icons/ri';

const GlobalHeader = () => {

  const [logged, setLogged] = useState(false);

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
      <>
      <RiDashboardFill size={"2rem"} color={"#6B46C1"}/> <RiLogoutBoxRFill/> </>: <RiHomeSmile2Fill/>}

      </Header>
  )
}

export default GlobalHeader