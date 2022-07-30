import React, { useEffect, useState } from "react"
import {
  Container,
  Grid,
  Displayer,
  FriendsTab,
} from "../../styled/dashboard.styled"
import { Navigate, useNavigate } from "react-router-dom"
import { getFeed } from "../../features/feedSlice/feedSlice.js"
import PostStatus from "../../components/PostStatus"
import ChatLog from "../../components/ChatLog"
import AboutDash from "../../components/AboutDash"
import { useSelector, useDispatch } from "react-redux"
import { feedSelector } from "../../features/feedSlice/feedSlice.js"
import { authSelector } from "../../features/authSlice/authSlice.js"


const Dashboard = () => {

 
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [loading,setLoading] = useState(false)
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
  const feed = useSelector(feedSelector);
  useEffect(() => {
    if (!auth.user){
      navigate("/login")} 
        else {
          setLoading(!loading);
          dispatch(getFeed())
          setTimeout(() => {
            console.log(feed)
          }, 3000);
    }
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
