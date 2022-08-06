import React, { useEffect, useState, useRef } from "react"
import {
  Container,
  Grid,
  Displayer,
  FriendsTab,
  NewsTab
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

  const exampleRef = useRef(null)
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
            dispatch(getFeed(1))
            setLoading(false);
            console.log("Feed Posts: ", feed.posts)
    }
  }, [feed.success])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("We hit!")
          dispatch(getFeed(feed.pageId + 1))
        }
      })
    })
    if (exampleRef.current) {
      observer.observe(exampleRef.current)
    }

    return () => {
      if(exampleRef.current) {
      observer.unobserve(exampleRef.current)
      }
    }
  }, [])
  return (
    <Grid>


      {name}
      <FriendsTab>
        <AboutDash name={name}></AboutDash>
      </FriendsTab>
      <NewsTab>
        <div>Yo</div>
      </NewsTab>
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
        <div ref={exampleRef}>Can't see me!</div>
      </Displayer>
    </Grid>
  )
}

export default Dashboard
