import React from 'react'
import { Container, InnerContainer } from './postStatus.styled'
import {Textarea, Avatar, AvatarBadge, AvatarGroup, Button, Box } from '@chakra-ui/react'

const PostStatus = () => {
  return (
    <Container>
        <InnerContainer>
            <h1>Daily Feed</h1>
                <div >
                    <Textarea className="input-container" placeholder="What's on your mind?" />
                    <Box textAlign="right">
                    <Button className="post-button" bg={"#3182CE"}     _focus={{ color: "inherit" }} _hover={{ bg: "teal.600" }}>Post</Button>
                    </Box>
                    
             </div>
        </InnerContainer>
    </Container>
  )
}

export default PostStatus