import React from 'react'
import { Input } from "../../styled/signup.styled"
const Signup = () => {
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
    </>
  )
}

export default Signup