import React from 'react'
import { Header, Grid, Displayer, Login, Footer } from '../../styled/homepage.styled'

const Home = () => {
  return (
    <>
    <Header>Socially</Header>
    <Grid>
        <Displayer>Welcome to Socially!</Displayer>
        <Login>Login here!
            Don't have an account? Let's sign up!
        </Login>
        <Footer>
            Hellosss
        </Footer>
    </Grid>
    </>
  )
}

export default Home