import React, { useState } from 'react'
import { Avatar, AvatarBadge, AvatarGroup, Button, Divider } from '@chakra-ui/react'
import { TopDiv, Container, TextContainer } from "./chatlog.styled";
import {IoEllipsisHorizontalCircleSharp} from 'react-icons/io5'
import { Link } from "react-router-dom";

const ChatLog = ({post}) => {
  // console.log("post from chatlog: ", post.username)
  const [showMore, setShowMore] = useState(false);
  console.log(post)
  let text = `${post.status}`
  let username = `${post.username}`
  let id = `${post.postedBy._id}`
  return (
    <Container>
    <TopDiv>
      <div className="icon-container">
        <AvatarGroup className="avatar-block">
          <Avatar
            bg='orange.500' 
            size="md"
            mr={2}
             />
        </AvatarGroup>
      
          <div className="name-container">
 
            <Link to={`/profile/${id}`}>
            <strong>{username}</strong>  
            </Link>
              <p>27m</p>
          </div>
      </div>

      <div className="ellip-icon">
        <IoEllipsisHorizontalCircleSharp size={"2.4rem"}/>
      </div>
    </TopDiv>
    <Divider/>
    <TextContainer className="text-container">
     
     <p>{showMore ? text && text : `${text.substring(0, 250)}`}</p>
     <Button className="show-more" bg={""} onClick={() => setShowMore(!showMore)}>See more</Button>
   </TextContainer>
   <div className="status-bg"></div>
    </Container>
  )
}

export default ChatLog