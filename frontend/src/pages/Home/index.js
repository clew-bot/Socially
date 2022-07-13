import React from 'react'
import { Header, Grid, Displayer, Login, Footer } from '../../styled/homepage.styled'
import { Link } from "react-router-dom"
import { Button } from '@chakra-ui/react'
const Home = () => {

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout');
      const data = await response.json();
      localStorage.removeItem('yllaicos1');
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>

    <Grid>
        <Displayer>Welcome to Socially!</Displayer>
        <Login>Login <Link  to={"/login"}>Here!</Link>
            Don't have an account? Let's <Link to={"/signup"}>Sign up!</Link>
            <Button onClick={handleLogout} color="purple">Sign Out</Button>
        </Login>
        <Footer>
            Hellosss
        </Footer>
    </Grid>
    </>
  )
}

export default Home