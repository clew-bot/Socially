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
    border-radius: 10px;
    border: solid 1.3px #B794F4;

    /* border-radius: 10px; */
    padding: 12px;
    margin-top: 2.5rem;
    background: #EDF2F7;
    position: relative;
      hr{
        border: solid .5px #B794F4;
      }

    .status-bg {
        position: absolute;
        height: 100%;
        min-width: 602px;
        background: #805AD5;
        top: 15px;
        left: 11px;
        z-index: -1 !important;
        border-radius: 6px;
        box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
    }

    @media screen and (max-width: 768px) {
        .status-bg {
            min-width: 95% !important;

        }
    }
`

export const TextContainer = styled.div`
        margin-top: 10px;
        z-index: 4;
        p{
            font-family: "Arial" serif;
        }
`