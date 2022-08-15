import React, { useEffect, useState, useRef } from "react"
import {
  Grid,
  Displayer,
  FriendsTab,
  NewsTab
} from "../../styled/dashboard.styled"
import { useNavigate } from "react-router-dom"
import { getFeed } from "../../features/feedSlice/feedSlice.js"
import PostStatus from "../../components/PostStatus"
import ChatLog from "../../components/ChatLog"
import AboutDash from "../../components/AboutDash"
import { useSelector, useDispatch } from "react-redux"
import { feedSelector } from "../../features/feedSlice/feedSlice.js"
import { authSelector } from "../../features/authSlice/authSlice.js"
import { logout } from "../../features/authSlice/authSlice.js"



const Dashboard = () => {

  const lastDiv = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [pageNumber, setPageNumber] = useState(1)

  const auth = useSelector(authSelector);
  const feed = useSelector(feedSelector);

  const consoleme = () => {
      console.log("Posts from redux: ", feed.posts)
  }

//   useEffect(() => {
//     if (!auth.user) {
//       navigate("/login")
// } 
//     const handleLogout = () => {
//       dispatch(logout())
//     }
//     if (auth.errorMessage === "Not logged in") {

//       console.log("hi")
//       handleLogout();
//     }
    
//   }, [auth.errorMessage, auth.user, dispatch, feed.errorMessage, feed.isError, navigate])

  useEffect(() => {

  
    let currently = lastDiv.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!feed.loading && feed.hasMorePosts && entry.isIntersecting && entry.intersectionRatio > 0) {
          setPageNumber(pageNumber => pageNumber + 1)
          try {
            dispatch(getFeed(pageNumber))
          } catch (error) {
            console.log("Error: ", error)
          }
      
        }
      })
    })
    if (currently) {
      observer.observe(lastDiv.current)
      // console.log("I'm obsvering you kid.")
    }
    return () => {
      if(currently) {
      observer.unobserve(currently)
      }
    }

  }, [auth.user, dispatch, feed.hasMorePosts, feed.loading, feed.posts, navigate, pageNumber])

  return (
    <Grid>
      {name}
      <FriendsTab>
        <AboutDash name={name}></AboutDash>
        {/* <button onClick={consoleme}><h1>TESTING</h1></button> */}

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
