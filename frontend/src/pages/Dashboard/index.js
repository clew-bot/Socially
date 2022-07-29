import React, { useEffect, useState } from "react"
import {
  Container,
  Grid,
  Displayer,
  FriendsTab,
} from "../../styled/dashboard.styled"
import { Navigate, useNavigate } from "react-router-dom"
import ChatContainer from "../../components/ChatContainer"
import PostStatus from "../../components/PostStatus"
import ChatLog from "../../components/ChatLog"
import AboutDash from "../../components/AboutDash"
import { useSelector } from "react-redux"
import { authSelector } from "../../features/authSlice/authSlice.js"

const Dashboard = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [lastLogged, setLastLogged] = useState(false)
  const [gender, setGender] = useState("")
  const [birthday, setBirthday] = useState("")
  const [id, setId] = useState("")
  const [details, setDetails] = useState({
    name: "",
    email: "",
    lastLogged: "",
    gender: "",
  })

  const auth = useSelector(authSelector)

  useEffect(() => {
    if (!auth.user) navigate("/login")
  }, [])
  return (
    <Grid>
      {name}
      <FriendsTab>
        <AboutDash name={name}></AboutDash>
      </FriendsTab>
      <Displayer>
        <PostStatus />
        <ChatLog />
        <ChatLog />
        <ChatLog />
        <ChatLog />
        <ChatLog />
      </Displayer>
    </Grid>
  )
}

export default Dashboard
