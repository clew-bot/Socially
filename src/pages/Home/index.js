import React from 'react'
import { Header, Grid, Displayer, Login, Footer } from '../../styled/homepage.styled'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
    <Header>Socially</Header>
    <Grid>
        <Displayer>Welcome to Socially!</Displayer>
        <Login>Login here!
            Don't have an account? Let's <Link to={"/signup"}>Sign up!</Link>
        </Login>
        <Footer>
            Hellosss
        </Footer>
    </Grid>
    </>
  )
}

export default Home