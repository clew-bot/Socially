import React from 'react'
import { Wrapper } from './aboutDash.styled'

const AboutDash = ({ name }) => {



  return (
    <Wrapper>
      <div>Welcome Back {name}</div>
      <div>You have no new messages</div>
      <button >Testing</button>
      </Wrapper>
  )
}

export default AboutDash