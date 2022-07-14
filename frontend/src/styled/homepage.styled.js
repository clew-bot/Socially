import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  max-width: 1170px;
  margin: 0 auto;
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 10px;
  max-width: 1170px;
  margin: 0 auto;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
  font-family: "Pacifico", cursive;
  font-size: 2.5rem;
  color: #7f5499;
  h1 {
    transform: skewY(100px);
  }
`;

export const Grid = styled.div`
  display: grid;
  /* padding: 90px 90px; */
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 0fr;
  gap: 10px 10px;
  max-width: 1170px;
  margin: 0 auto;
  grid-template-areas:
    "Displayer Displayer Displayer"
    "Displayer Displayer Displayer"
    "Footer Footer Footer";

  h1 {
    font-size: 5rem;
    text-align: center;
    font-weight: bold;
    color: aliceblue;
    letter-spacing: -5px;
    margin-top: 6rem;
  }

  .login-box {
    background-color: rgba(255,255,255,0.7);
    border-radius: 5px;
    max-width: 800px;
    padding: 1.5rem;
    margin-top: 10rem;

    h2 {
      font-size: 1.4rem;
      text-align: center;
      color: black !important;
    }
    

    button {
      margin: 20px;
      opacity: 1 !important;
      min-width: 6rem !important;
    }
  }
`;

export const Displayer = styled.div`
  height: 100vh;
  grid-area: Displayer;
  h1 {
    font-size: 5rem;
  }
  .mover-text {
    color: black;
  }

  .welcome-container {
    display: flex;
    justify-content: start;
    align-items: center;
  }
`;
export const Login = styled.div`
  background-color: #f5f5f5;
  height: 100px;
  height: 50vh;
  grid-area: Login;
`;

export const Footer = styled.div`
  background-color: #f5f5f5;
  border: solid 2px red;
  height: 11vh;
  grid-row: 1/3;
  grid-area: Footer;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
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
`;
