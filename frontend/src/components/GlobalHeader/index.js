import React from 'react'
import { Header, HeaderLink } from "../../styled/homepage.styled";
import { Link } from "react-router-dom";

const GlobalHeader = () => {
  return (
    <Header><HeaderLink to={"/"}>Socially</HeaderLink></Header>
  )
}

export default GlobalHeader