import styled from 'styled-components';

export const Input = styled.input`
    border: solid 2px black;
    height: 30px;
    width: 200px;
    margin: 10px;
    padding: 5px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #333;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    &:focus {
        border-color: #66afe9;
        outline: 0;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(102, 175, 233, 0.6);
    }
`