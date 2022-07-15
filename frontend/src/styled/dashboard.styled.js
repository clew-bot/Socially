import styled from "styled-components"

export const Container = styled.div`
  padding: 10px;
  color: white;
  `

export const Grid = styled.div`
display: grid;
/* padding: 90px 90px; */
grid-template-columns: 1fr 2fr 1fr;
grid-template-rows: 1fr 1fr 0fr;
gap: 10px 10px;
max-width: 1170px;
margin: 0 auto;
grid-template-areas:
  "Friends Displayer Displayer"
  "Friends Displayer Displayer"
  "Friends Displayer Displayer";
  `

export const Displayer = styled.div`
  grid-area: Displayer;
  height: 100vh;
  background: aliceblue;

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
  }
`


export const FriendsTab = styled.div`
  grid-area: Friends;
  background-color: #7f5499;
  height: 100vh;
  background: hotpink;
  `

