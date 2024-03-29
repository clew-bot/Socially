import styled from "styled-components"

export const Container = styled.div`
  padding: 10px;
  color: white;
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
  "Friends Displayer Displayer"
  "News Displayer Displayer"
  "News Displayer Displayer";

  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
      "Friends"
      "News"
      "Displayer";
  }
  `

export const Displayer = styled.div`
  grid-area: Displayer;
  
  background: #CBD5E0;
  z-index: 2;
  margin-top: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: sticky;
  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    margin-top: 0px;
  }
`


export const FriendsTab = styled.div`
  grid-area: Friends;
  background: #CBD5E0;
  margin-top: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 100px;

  `

export const NewsTab = styled.div`
  grid-area: News;
  background: #CBD5E0;
  margin-top: 10px;
  grid-auto-flow:dense ;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  `
