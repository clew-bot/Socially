import React from 'react'
import { Container, InnerContainer } from './postStatus.styled'
import {Textarea, Avatar, AvatarBadge, AvatarGroup, Button } from '@chakra-ui/react'

const PostStatus = () => {
  return (
    <Container>
        <InnerContainer>
            <h1>Daily Feed</h1>
                <div >
                    <Textarea className="input-container" placeholder="What's on your mind?" />
             </div>
        </InnerContainer>
    </Container>
  )
}

export default PostStatus