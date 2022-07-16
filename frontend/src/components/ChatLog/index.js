import React, { useState } from 'react'
import { Avatar, AvatarBadge, AvatarGroup, Button } from '@chakra-ui/react'
import { TopDiv, Container, TextContainer } from "./chatlog.styled";
import {IoEllipsisHorizontalCircleSharp} from 'react-icons/io5'

const ChatLog = () => {
  const [showMore, setShowMore] = useState(false);

  let text = `Hello world! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, rem id fugit ex minus voluptatibus pariatur magni ipsam, modi cum quis aut natus, omnis commodi quos iure soluta autem optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellat doloribus vero dicta neque, ut suscipit excepturi quisquam debitis ab necessitatibus vel quos dignissimos sit impedit reiciendis. Similique, ut doloribus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam pariatur impedit excepturi ea laudantium quas commodi nesciunt, suscipit ratione, mollitia quaerat velit, officia eaque dolor sed nobis nam illo dolore.`
  return (
    <Container>
    <TopDiv>
      <div className="icon-container">
        <AvatarGroup className="avatar-block">
          <Avatar
            bg='orange.500' 
            src="https://bit.ly/2XyqQZr"
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
    <TextContainer className="text-container">
     
     <p>{showMore ? text : `${text.substring(0, 250)}`}</p>
     <Button className="show-more" bg={""} onClick={() => setShowMore(!showMore)}>See more</Button>
   </TextContainer>
    </Container>
  )
}

export default ChatLog