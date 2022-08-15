import styled from "styled-components";

export const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    background: white;
    max-width: 1170px;
    margin-top: 12px;
    border-radius: 10px;
    height: 100vh;
    
`

export const Grid = styled.div`
display: grid;
/* padding: 90px 90px; */
grid-template-columns: 1fr 2fr 1fr;
grid-template-rows: auto 1fr 0fr;
gap: 10px 10px;
max-width: 1170px;
margin: 0 auto;
grid-template-areas:
  "ProfilePicture Header Header"
  "About About About"
  "About About About";
  `


export const BackgroundContainer = styled.div`
    background: #ECC94B;
    
`