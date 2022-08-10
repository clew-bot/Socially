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
import { getMoreFeed } from "../../features/feedSlice/feedSlice.js"
import PostStatus from "../../components/PostStatus"
import ChatLog from "../../components/ChatLog"
import AboutDash from "../../components/AboutDash"
import { useSelector, useDispatch } from "react-redux"
import { feedSelector } from "../../features/feedSlice/feedSlice.js"
import { authSelector } from "../../features/authSlice/authSlice.js"
import { cookieStorageManager } from "@chakra-ui/react"


const Dashboard = () => {

  const lastDiv = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [pageId, setPageId] = useState(1)

  const auth = useSelector(authSelector);
  const feed = useSelector(feedSelector);

  const consoleme = () => {
      console.log("Posts from redux: ", feed.posts)
  }

  useEffect(() => {
    if (!auth.user){
      navigate("/login")} 
        else {
            dispatch(getFeed(pageId))
            console.log("Feed Posts: ", feed.posts)
    }
  }, [])

  useEffect(() => {
    let currently = lastDiv.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!feed.loading && feed.hasMorePosts && entry.isIntersecting && entry.intersectionRatio > 0) {
          setPageId(pageId => pageId + 1)
          console.log("counter: ", pageId)
          dispatch(getMoreFeed(pageId + 1))
        }
      })
    })
    if (currently) {
      observer.observe(lastDiv.current)
      console.log("I'm obsvering you kid.")
    }
    return () => {
      if(currently) {
      observer.unobserve(currently)
      }
    }
  }, [dispatch, feed.loading, pageId])

  return (
    <Grid>


      {name}
   
      <FriendsTab>
        <AboutDash name={name}></AboutDash>
        <button onClick={consoleme}><h1>TESTING</h1></button>

      </FriendsTab>
      <NewsTab>
        <div>Yo</div>
      </NewsTab>
      <Displayer>
        <PostStatus />
        {feed.loading && <p>Loading...</p>}
        {feed.posts.map
        ((post, index) => {
          return  <ChatLog key={index} post={post} />
        })}
        {feed.loading && <p>Loading...</p>}
       <div ref={lastDiv}>Can't see me!</div>
      </Displayer>
    </Grid>
  )
}

export default Dashboard
