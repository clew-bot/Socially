import React from 'react'
import { Input } from "../../styled/signup.styled"


const Signup = () => {
  const handleSignUp = async (e) => {
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
    <div>Signup here!!!</div>
    <Input placeholder="First name"></Input>
    <Input placeholder="Last name"></Input>
    <br/>
    <select>
        <option value="" disabled selected>
            Select your country
        </option>
    </select>
    <Input placeholder="First name"></Input>
    <Input placeholder="First name"></Input>
    <Input placeholder="First name"></Input>
    <Input placeholder="First name"></Input>
    <button onClick={handleSignUp} >TEsting</button>
    </>
  )
}

export default Signup