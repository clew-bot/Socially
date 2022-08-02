import React, { useEffect, useState, useMemo } from "react"
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
  const [loading,setLoading] = useState(true)

  const auth = useSelector(authSelector);
  const feed = useSelector(feedSelector);
  useEffect(() => {
    if (!auth.user){
      navigate("/login")} 
        else {


            dispatch(getFeed())
            setLoading(false);
            console.log("Feed Posts: ", feed.posts)
    }
  }, [feed.success])
  return (
    <Grid>


      {name}
      <FriendsTab>
        <AboutDash name={name}></AboutDash>
      </FriendsTab>
      <Displayer>
        <PostStatus />
        
        {feed.posts.map
        ((post, index) => {
          return <ChatLog key={index} post={post} />
        })}



        {/* <ChatLog />
        <ChatLog />
        <ChatLog />
        <ChatLog />
        <ChatLog /> */}
      </Displayer>
    </Grid>
  )
}

export default Dashboard
