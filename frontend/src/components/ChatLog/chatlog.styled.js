import styled from "styled-components";

export const TopDiv = styled.div`
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    position: relative;
    .text-container {
        margin-left: 15px;
    }

    .icon-container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    .ellip-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 12px;
    }

    .name-container {
        padding-left: 5px;
        p {
            font-size: 0.8rem;
        }
    }
`

export const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    border: solid 1px black;
    border-radius: 5px;
    padding: 12px;
    margin-top: 1rem;
`

export const TextContainer = styled.div`
        margin-top: 10px;
        
        p{
            font-family: "Arial" serif;
        }
`