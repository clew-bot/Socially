import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { authSelector } from "../../features/authSlice/authSlice.js"
import { Container, BackgroundContainer } from "../../styled/profile.styled"

const Profile = () => {
  const auth = useSelector(authSelector)
  useEffect(() => {
    if (!auth.user) navigate("/login")
  }, [])
  return (
    <Container>
      <BackgroundContainer>Profile</BackgroundContainer>
    </Container>
  )
}

export default Profile
