import styled from 'styled-components';

export const Input = styled.input`
    border: solid 2px black;
    transform: skewX(100px);
    border-radius: 5px;
    height: 30px;
    width: 200px;
    margin: 10px;
    padding: 5px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #333;
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    &:focus {
        border-color: #ef0000;
        outline: 0;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(102, 175, 233, 0.6);
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 1170px;
    margin: 0 auto;

    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    &:focus {
        border-color: #ef0000;
        outline: 0;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(102, 175, 233, 0.6);
    }
`

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
    border: solid 2px black;
    height: 43px;
    width: ${props => props.width || '200px'}; 
    margin: 10px;
    padding: 5px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #333;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    &:focus {
        border-color: #ef0000;
        outline: 0;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(102, 175, 233, 0.6);
    }
`
export const Container = styled.div`
    display: flex;
    justify-content :start;

    `