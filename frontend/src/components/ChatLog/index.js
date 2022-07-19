import React, { useState } from 'react'
import { Avatar, AvatarBadge, AvatarGroup, Button, Divider } from '@chakra-ui/react'
import { TopDiv, Container, TextContainer } from "./chatlog.styled";
import {IoEllipsisHorizontalCircleSharp} from 'react-icons/io5'

const ChatLog = () => {
  const [showMore, setShowMore] = useState(false);

  let text = `Hello world! lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem Hello world! lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem Hello world! lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem Hello world! lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem Hello world! lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem Hello world! lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem Hello world! lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem Hello world! lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem Hello world! lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem Hello world! lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem Hello world! lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem Hello world! lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem `
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
            <strong>Chad Lew</strong>  
              <p>27m</p>
          </div>
      </div>
      <div className="ellip-icon">
        <IoEllipsisHorizontalCircleSharp size={"2.4rem"}/>
      </div>
    </TopDiv>
    <Divider/>
    <TextContainer className="text-container">
     
     <p>{showMore ? text : `${text.substring(0, 250)}`}</p>
     <Button className="show-more" bg={""} onClick={() => setShowMore(!showMore)}>See more</Button>
   </TextContainer>
   <div className="status-bg"></div>
    </Container>
  )
}

export default ChatLog