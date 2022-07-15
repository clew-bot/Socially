import styled from "styled-components";
import { Link } from "react-router-dom";
// import home3 from "../assets/home/home3.jpg";

export const Header = styled.header`
  max-width: 1170px;
  margin: 0 auto;
  background: #ECC94B;
  padding: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;


`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 10px;

  font-family: "Pacifico", cursive;
  font-size: 2.5rem;
  color: #7f5499;
  h1 {
    transform: skewY(100px);
  }

  .home-icon {
    color: white !important;
  }

`;

export const Grid = styled.div`
  display: grid;
  /* padding: 90px 90px; */
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1/2fr;
  gap: 10px 10px;
  max-width: 1170px;
  margin: 0 auto;
  grid-template-areas:
    "Displayer Displayer Displayer"
    "Testimonial Testimonial Testimonial"
    "Footer Footer Footer";

  h1 {
    font-size: 5rem;
    text-align: center;
    font-weight: bold;
    color: aliceblue;
    letter-spacing: -5px;
  }

  .login-box {
    background-color: rgba(255,255,255,0.7);
    border-radius: 5px;
    max-width: 800px;
    padding: 1.5rem;
    margin-top: 10rem;
    background: #9F7AEA;
    background-size: cover;
    object-fit: cover !important;
    position: relative;
    box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
    @media screen and (max-width: 600px) {
      width: 420px !important;
    }

    h2 {
      font-size: 2rem;
      margin: 10px;
      font-weight: bold;
      font-style: italic;
      letter-spacing: -2.4px;
      text-align: center;
      color: aliceblue !important;
      background:#B794F4;
      border-radius: 4px;
    }

    p{
      font-size: 1.1rem;
      text-align: center;
      color: aliceblue !important;
      margin-top: 25px;

    }
    

    button {
      margin: 20px;
      opacity: 1 !important;
      min-width: 6rem !important;
    }
  }
`;

export const Displayer = styled.div`
  /* height: 100vh; */
  grid-area: Displayer;
  h1 {
    font-size: 5rem;
  }
  .mover-text {
    color: black;
  }

  .welcome-container {
    position: relative;
    display: flex;
    justify-content: start !important;
    align-items: center;
    width: 560px;
    background: #9F7AEA;
    border-radius: 5px;
    padding: 1rem;
    box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
    margin-top: 6rem;
    @media screen and (max-width: 600px) {
    margin-left: 0px !important;
    text-align: center;
    width: 325px;
    h1{
      font-size: 3rem;
    }
  }
  }


`;
export const Login = styled.div`
  background-color: #f5f5f5;
  height: 100px;
  height: 50vh;
  grid-area: Login;
`;

export const Footer = styled.div`
  margin-top: 120px;
  background-color: #f5f5f5;

  grid-row: 1/3;
  grid-area: Footer;
  background: #ECC94B;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  .footer-links {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 4.5rem;
    padding:10px;
    font-size: 1.2rem;
    font-weight: lighter;
    @media screen and (max-width: 600px) {
      flex-direction: column !important;
    }

  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const TestimonialContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #48BB78;
  border-radius: 10px;
  grid-area: Testimonial;
  gap: 5px;
  height: 543px;
  margin-top: 20%;
  position: relative;
  @media screen and (max-width: 600px) {
      flex-direction: column;
      padding: 2.5rem;
      margin: 2.5rem;
      grid-row: 2;
      height: 100%;
    }


  /* .box-1:nth-child(1) {
    transform: translateY(45px)
  }  
  .box-1:nth-child(2) {
    transform: translateY(10px)
  }  
  .box-1:nth-child(3) {
    transform: translateY(-45px)
  }   */

  

  .box-1 {
    z-index: 2;
    font-size: 3rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: -3.5px;
    background: #FEFCBF;
    border-radius: 50px;
    padding: 1.3rem;
    margin-top: 0px;
    height:465px;
    box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
      @media screen and (max-width: 600px) {
        margin-top: 2.5rem;
    }
    p {
      margin-top: 70px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      color: #1C4532;
    }
    @keyframes moveUp {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-100px);
      }
    }

    &:hover {
      /* animation: moveUp 0.5s ease-in-out; */
    }
  }

  .test-bg {
    z-index: 1;
    height: 513px;
    background: yellow;
    width: 1150px;
    position: absolute;
    top: 14px;
    background: #ECC94B;
    border-radius: 30px;
    box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
      @media screen and (max-width: 600px) {
    display: none;
    }
 
  }
  .glad-text {
    color: #2c2d2e;
    font-size: 4rem;
 
  }
  `;

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .main-home1 {
    z-index: -1;
    mix-blend-mode: lighten;
    position: absolute;
    width: 88rem;
    top: 3.8rem;
    border-radius: 5px;
  }

  .login-bg {
    background: #F6E05E !important;
    height: 270px;
    width: 830px;
    position: absolute;
    top: -18px;
    left: -18px;
    z-index: -1;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    border-radius: 5px;
    transform: rotate(4deg);
    /* animation: tiltLeft 5s ease-in-out infinite; */
    @media screen and (max-width: 600px) {
      display: none
    }
  }
  .welcome-bg {
    background: #F6E05E !important;
    height: 200px;
    width: 582px;
    position: absolute;
    top: -22px;
    left: -10px;
    z-index: -1;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    border-radius: 5px;
    transform: rotate(-2deg);
    @media screen and (max-width: 600px) {
      width: 345px !important;
      height: 150px;
    }
  }

  @keyframes tiltLeft {
    0% {
        transform: rotate(0deg);

    }
    30% {
        transform: rotate(2deg);
    }
    60% {
        transform: rotate(-2deg);
    }
    80% {
        transform: rotate(2deg) translate(0px);;
    }
    100% {
        transform: rotate(0deg);
    }
}
`;
