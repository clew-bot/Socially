import React from 'react'
import { Input, Form, Select, Container } from "../../styled/signup.styled"


const Signup = () => {
  const handleSignUp = async (e) => {
    e.preventDefault()
    const data = await fetch("/api/auth", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    const json = await data.json()
    console.log(json)
  }


  return (
    <>
    
    <Form onSubmit={handleSignUp}>
    <h1>Signup</h1>
    <Container>
    <Input placeholder="First name"></Input>
    <Input placeholder="Last name"></Input>
    </Container>
    <Input width="100" placeholder="Email"></Input>
    <br/>
 
    <Select>
      <option value="" selected disabled>Gender</option>
        <option value="Male">
            Male
        </option>
        <option value="Female">
            Female
        </option>
    </Select>
    <Container>
   <Select name="Month" id="">
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
    <Input type="text" placeholder="Day"></Input>
    <Input type="text" placeholder="Year"></Input>
    </Container>
    <h2>Security Questions:</h2>
    <Select name="sQuestion" id="" width="500px">
      <option value="Pick a question" selected disabled>Pick a question</option>
      <option value="petName">What was your first pet's name</option>
      <option value="Pick a question" >What was your favorite childhood cartoon</option>
      <option value="Pick a question">What is your favorite food</option>
   </Select>
   <Input placeholder="Answer"></Input>
    <button >Signup</button>
    </Form>
    </>
  )
}

export default Signup