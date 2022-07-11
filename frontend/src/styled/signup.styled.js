import styled from 'styled-components';

export const Centered = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    `;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 1170px;
    margin: 0 auto;
    background-color: #b1b1b1;
    max-width: 500px;
    height: 100%;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075)
    ;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    &:focus {
        border-color: #ef0000;
        outline: 0;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(102, 175, 233, 0.6);
    }

    h1 {
        font-weight: bolder;
        font-size: 1.3rem;
        text-align: center;
        margin-bottom: 10px;
    }
`

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
    height: 35px;
    width: ${props => props.width || '200px'}; 
    margin: 10px;
    padding: 5px;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #333;
    background-color: #eee;
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
    align-items: center;
    input {
        margin: 5px;
        border: solid 2px #bfb8b8;
        background: #eee;
        &:focus {
            border-color: #b2b2b2;
            outline: 0;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(102, 175, 233, 0.6);

        }
    }
    h3 {
        padding: 7px;
        font-size: 1.2rem;
    }
    hr {
        padding-top: 40px;
    }
    `