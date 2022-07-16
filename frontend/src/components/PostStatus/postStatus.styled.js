import styled from "styled-components";

export const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
`

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        text-align: left;
        font-size: 2.5rem;
        font-weight: bolder;
        letter-spacing: -3px;
    }

    .input-container {
        margin-bottom: 10px;
        border: solid 1px black;
        background: #EDF2F7;
        &:hover {
            border: solid 1px black;
        }
    }
`