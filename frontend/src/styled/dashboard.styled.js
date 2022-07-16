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
  background: #CBD5E0;
  z-index: 2;
  margin-top: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
  }
`


export const FriendsTab = styled.div`
  grid-area: Friends;
  background: #CBD5E0;
  margin-top: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  `

