import styled from 'styled-components';

export const Header = styled.header`
    border: solid 2px black;
    height: 50px;
    margin-bottom: 10px;
    max-width: 1170px;
    margin: 0 auto;
`

export const Grid = styled.div`
    display: grid; 
    /* padding: 90px 90px; */
    grid-template-columns: 2fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 0fr; 
    gap: 10px 10px; 
    max-width: 1170px;
    margin: 0 auto;
    grid-template-areas: 
        "Displayer Displayer Login"
        "Displayer Displayer Login"
        "Footer Footer Footer";
`

export const Displayer = styled.div`
    background-color: #f5f5f5;
    border: solid 2px black;
    height: 100vh;
    grid-area: Displayer;
`
export const Login = styled.div`
    background-color: #f5f5f5;
    border: solid 2px red;
    height: 100px;
    height: 50vh;
    grid-area: Login;
`

export const Footer = styled.div`
    background-color: #f5f5f5;
    border: solid 2px red;
    height: 11vh;
    grid-row: 1/3;
    grid-area: Footer;
`
