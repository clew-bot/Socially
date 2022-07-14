import React, { useState, useEffect } from 'react'
import { Header, Grid, Displayer, Login, Footer, ButtonContainer, CenteredDiv } from '../../styled/homepage.styled'
import { Link } from "react-router-dom"
import { Button } from '@chakra-ui/react'
import MovingComponent from 'react-moving-text'
import home1 from "../../assets/home/home1.jpg"
import home2 from "../../assets/home/home2.jpg"
import home3 from "../../assets/home/home3.jpg"


const Home = () => {
  const [done, setDone] = useState(false)
  const [text, setText] = useState('');
  const [key , setKey] = useState(0);


  useEffect(() => {
    const handleTimeout = () => {
      setText("friends");
      setTimeout(() => {
        setKey(() => key + 1);
        setText("peers")
      }
        , 1500)
      setTimeout(() => {
          setKey(() => key + 2);
          setText("homies")
        }
          , 3000)
      setTimeout(() => {
            setKey(() => key + 3);
            setText("lovers")
          }
            , 4500)
      setTimeout(() => {
              setKey(() => key + 4);
              setText("everyone")
            }
              , 6500)

    }
    handleTimeout()
  }, [])


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
        <Displayer>
          <div className="welcome-container">
        <h1>Meet</h1>
        <MovingComponent
            type="fadeInFromTop"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
            key={key}
            className="mover-text"
            >
            
  <h1>&nbsp;&nbsp;{text}</h1>

</MovingComponent>
</div>
<CenteredDiv>
<img src={home3} alt="" className="main-home1" />
<div className="login-box">
   <h2>What are you waiting for?</h2>
   <p>Meet people today! If you already have an account you can sign in to use Socially on the web</p>
   <ButtonContainer>
<Button colorScheme={ "yellow" } marginRight="10px" borderRadius={"3px"} border={"solid 2px black"}><Link  to={"/login"}>Sign In</Link></Button>
<Button colorScheme={ "yellow" } color={"black"} border={"solid 2px black"}borderRadius={"3px"}><Link to={"/signup"}>Join</Link></Button>
</ButtonContainer>
  </div>
  </CenteredDiv>
        </Displayer>
  
        <Footer>
            Hellosss
        </Footer>
    </Grid>
    </>
  )
}

export default Home