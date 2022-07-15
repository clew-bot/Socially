import React, { useState, useEffect } from 'react'
import { Header, Grid, Displayer, Login, Footer, ButtonContainer, CenteredDiv, TestimonialContainer } from '../../styled/homepage.styled'
import { Link } from "react-router-dom"
import { Button, Center } from '@chakra-ui/react'
import MovingComponent from 'react-moving-text'
import teamUp from "../../assets/home/teamUp.svg"
import coffeeFriends from "../../assets/home/coffeeFriends.svg"
import people from "../../assets/home/people.svg"


const Home = () => {
  const [text, setText] = useState('');
  const [key , setKey] = useState(0);


  useEffect(() => {
    const handleTimeout = () => {
      setText("friends");
      setTimeout(() => {
        setKey(() => key + 1);
        setText("enemies")
      }
        , 1500)
      setTimeout(() => {
          setKey(() => key + 2);
          setText("homies")
        }
          , 3000)
      setTimeout(() => {
            setKey(() => key + 3);
            setText("buddies")
          }
            , 4500)
      setTimeout(() => {
              setKey(() => key + 4);
              setText("everyone ")
            }
              , 6000)

    }
    handleTimeout()
  }, [])


  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout');
      const data = await response.json();
      localStorage.removeItem('yllaicos1');
      console.log(data);
      alert("You have been logged out", data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
    {/* <button style={{position: "absolute", fontSize: "2rem", top: "0", right: "0", background: "white"}} onClick={handleLogout}>Log me out!</button> */}

    <Grid>
        <Displayer>
          <CenteredDiv>
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
<div className="welcome-bg"></div>
</div>
</CenteredDiv>
<CenteredDiv>
<div className="login-box">
   <h2>What are you waiting for?</h2>
   <p>Meet people today! If you already have an account you can sign in to use Socially on the web</p>
   <ButtonContainer>
   <Link  to={"/login"}><Button colorScheme={ "yellow" } marginRight="10px" borderRadius={"3px"} border={"solid 2px black"}>Sign In</Button></Link>
   <Link to={"/signup"}><Button colorScheme={ "yellow" } color={"black"} border={"solid 2px black"}borderRadius={"3px"}>Join</Button></Link>
</ButtonContainer>
<div className="login-bg"></div>
  </div>

  </CenteredDiv>
        </Displayer>
          <TestimonialContainer>
    
            <div class="box-1">
              <img src={teamUp} alt="" />
              <p>Find</p>
            </div>
            <div class="box-1">
              <img src={coffeeFriends} alt="" />
              <p>Connect</p>
            </div>
            <div class="box-1">
             <img src={people} alt="" />
             <p>Make Friends</p>
            </div>
            <div className="test-bg ">
            <h1 className="glad-text">
              </h1>
            </div>
          </TestimonialContainer>
        <Footer>
            © Socially 2022
            <div className="footer-links">
              <h2>
                FAQ's
              </h2>
              <h2>
                Careers
              </h2>
              <h2>
                About Me
              </h2>
              <h2>
                Code
              </h2>
              <h2>
                Privacy Policy
              </h2>
              <h2>
                Contact Me
              </h2>
            </div>
        </Footer>
    </Grid>
    </>
  )
}

export default Home