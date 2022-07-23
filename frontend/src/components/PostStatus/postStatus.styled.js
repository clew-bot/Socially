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
        position: relative;
        &:hover {
            border: solid 1px black;
        }
    }
    .wink-emoji {
        margin-top: 10px;
        transition: all 0.3s ease-in-out;
        z-index: 2;
        color: #805AD5;
        &:hover {
            color: #553C9A;
            animation: popOut 1s ease-in-out;
        }
    }

    @keyframes popOut {
        0% {
            transform: scale(1);
        }
        20% {
            transform: scale(1.5) rotate(10deg);
        }
        40% {
            transform: scale(1.4) rotate(10deg);
        }
        60% {
            transform: scale(1.6) rotate(5deg);;
        }
        100% {
            transform: scale(1);
        }
    }

    .open-emoji {
        opacity: 1;
        transition: all 0.5s;
        width: 80%;
        max-height: 300px;
    }
    .close-emoji {
        opacity: 0;
        width: 80%;
        max-height: 0;
        transition: all 0.5s;
        visibility: hidden;

    }
`