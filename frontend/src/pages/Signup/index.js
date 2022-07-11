import React, { useState } from "react";
import { Form, Select, Container } from "../../styled/signup.styled";
import { useForm } from "../../hooks/useForm";
import {
  Input, Button
} from '@chakra-ui/react'

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [values, handleChange] = useForm({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    sAnswer: "",
  });
  const [gender, setGender] = useState([]);
  const [securityQuestion, setSecurityQuestion] = useState([]);
  const handleSignUp = async (e) => {
    console.log(securityQuestion);
    console.log(gender);
    console.log(securityQuestion);

    e.preventDefault();
    console.log(loading)
    setLoading(() => !loading)
    const data = await fetch("/api/auth", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await data.json();
    console.log(json);
  };

  return (
    <>
      <Form onSubmit={handleSignUp}>
        <h1>Signup</h1>
        <Container>
          <Input
            width="300px" 
            onChange={handleChange}
            name="fullName"
            placeholder="Name"
          ></Input>
                  <br />
        <Input placeholder="Email"></Input>

        </Container>

        <Container>
          <Input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
          ></Input>
          <Input
            onChange={handleChange}
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          ></Input>
        </Container>
        <h3>I am a...</h3>
        <Select
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option defaultValue="" disabled>
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Select>
        <Container>
          <Select name="Month" onChange={handleChange}>
            <option value="Janurary">Janurary</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </Select>
          <Input type="text" placeholder="Day" onChange={handleChange}></Input>
          <Input type="text" placeholder="Year" onChange={handleChange}></Input>
        </Container>
        <h2>Security Questions:</h2>
        <Select
          name="sQuestion"
          id=""
          onChange={(e) => {
            setSecurityQuestion(e.target.value);
          }}
        >
          <option defaultValue="Pick a question" disabled>
            Pick a question
          </option>
          <option value="What whas your first pet's name?">
            What was your first pet's name
          </option>
          <option value="What was your favorite childhood cartoon?">
            What was your favorite childhood cartoon
          </option>
          <option value="What is your favorite food?">
            What is your favorite food
          </option>
        </Select>
        <Input name="sAnswer" placeholder="Answer"></Input>
        <Button type="submit" isLoading={loading} colorScheme='teal' variant='solid'>Signup</Button>
      </Form>
    </>
  );
};

export default Signup;
