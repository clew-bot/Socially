import styled from "styled-components";

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form`

  .error-slide {
    transform: translateY(100px);
    transition: all 0.5s ease-in-out;
    animation: moveDown 0.5s ease-in-out forwards !important;

    h2 {
      position: absolute;
      bottom: 10%;
      left: 18%;
      font-size: 1rem;
      font-weight: bolder;
    }
  }

  .behind-bg {
    background-image: linear-gradient(
      45deg,
      rgb(253, 38, 122),
      rgb(255, 96, 54)
    );
    z-index: -2;
    position: absolute;
    height: 210px !important;
    width: 267px;
    border-radius: 10px;
    box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
      animation: tiltLeft 5s ease-in-out infinite;

@keyframes tiltLeft {
    0% {
        transform: rotate(0deg);

    }
    30% {
        transform: rotate(10deg);
    }
    60% {
        transform: rotate(5deg) translate(5px);
    }
    80% {
        transform: rotate(8deg) translate(0px);;
    }
    100% {
        transform: rotate(0deg);
    }
}

@keyframes moveDown {
    0% {
        transform: translateY(0px);
    }
    100% {
        transform: translateY(50px);
    }
}
  }

  @media screen and (max-width: 600px) {
    width: 400px;
    .behind-bg {
      width: 400px;
    }
  }
  /* center with transform for me github copilot. lets go */

  margin-bottom: 20rem !important;



  display: flex;
  flex-direction: column;
  max-width: 1170px;
  margin: 0 auto;
  /* background-color: #b1b1b1; */
  background-color: #ffc62a;

  max-width: 500px;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);

  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  &:focus {
    border-color: #e6b925;
    outline: 0;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset,
      0 0 8px rgba(102, 175, 233, 0.6);
  }

  h1 {
    font-weight: bolder;
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 10px;
    font-family: "Pacifico", cursive;
    letter-spacing: 2px;
    font-weight: bolder;
    color: #eee;
    -webkit-text-stroke: 0.1px black;
  }
`;

export const Container = styled.div`


  input {
    margin: 5px;

    background: #eee;
    &:focus {
      border-color: #e6b925;
      outline: 0;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset,
        0 0 8px rgba(102, 175, 233, 0.6);
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
    text-overflow: "";
    margin: 6px;
    padding: 5px;
    height: 38px;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    color: #333;
    background-color: #eee;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    &:focus {
      border-color: #e6b925;
      outline: 0;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset,
        0 0 8px rgba(102, 175, 233, 0.6);
    }
  }
`;

export const Centered2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0%;
  button {
    font-family: "Pacifico", cursive;
    font-size: 1.1rem;
    font-weight: lighter;
    padding: 17px;
    padding-top: 12px;
    box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
    &:focus {
      transition: all 0.15s ease-in-out;
      animation: downAndUp 0.5s forwards;
    }
  }

  @keyframes downAndUp {
    0% {
      transform: translateY(0);
      color: #a62b39;
    }
    30% {
      transform: translateY(4px);
      box-shadow: none;
      color: #459970;
    }
    70% {
      transform: translateY(-2px);
      color: #615996;
    }
    100% {
      transform: translateY(0);
      box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
        0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
        0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
      color: #e6f263;
    }
  }
`;

export const GenderContainer = styled.div`
  svg {
    margin-left: 12px;
  }
`;

export const BirthdayContainer = styled.div`
  display: flex;
  margin-right: 9.5px;
`;
