import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { authSelector } from "../../features/authSlice/authSlice.js"
import { Container, BackgroundContainer } from "../../styled/profile.styled"
import { useNavigate } from "react-router-dom"

const Profile = () => {
  const navigate = useNavigate()
  const auth = useSelector(authSelector)
  useEffect(() => {
    if (!auth.user) navigate("/login")
  }, [])
  return (
    <Container>
      <BackgroundContainer><h1>YO this is the profile page</h1></BackgroundContainer>
    </Container>
  )
}

export default Profile
