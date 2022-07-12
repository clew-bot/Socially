import styled from 'styled-components';

export const Centered = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    `;

export const Form = styled.form`
     
    @media screen and (max-width: 600px) {
        width: 400px;
    }
     
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

`
export const Container = styled.div`
    display: flex;
    justify-content :${props => props.js || 'space-between'};
    align-items: center;
    .error-email {
        border: solid 2px red;
    }

    .error {
        border: solid 2px red;
        animation: shake 0.5s;
    } 

    @keyframes shake {
        10%, 90% {
            transform: translate3d(-1px, 0, 0);
        }
        20%, 80% {
            transform: translate3d(2px, 0, 0);
        }
        30%, 50%, 70% {
            transform: translate3d(-4px, 0, 0);
        }
        40%, 60% {
            transform: translate3d(4px, 0, 0);
        }
    }
    
    input {
        margin: 5px;
  
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
    .css-19wuo85 {
        margin-top: 10px;
        margin-left: 12px;
        background: #91918a;
    }

    .css-1y1zyf5 {
        top: 0;
        left: 0;
        position: absolute;
    }
    .gender-select {
    }
    select {
        @media screen and (max-width: 600px) {
            .chakra-select__icon {

            }
    }
    -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
    margin: 6px;
    padding: 5px;
    height: 38px;
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
}
    `

    export const Centered2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0%;
    `

    export const GenderContainer = styled.div`
        svg {
            margin-left: 12px;
        }
    `

    export const BirthdayContainer = styled.div`
        display: flex;
        margin-right: 9.5px;
    `