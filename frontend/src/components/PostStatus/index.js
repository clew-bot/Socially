import React, { useState } from 'react'
import { Container, InnerContainer } from './postStatus.styled'
import {Textarea, Avatar, AvatarBadge, AvatarGroup, Button, Box } from '@chakra-ui/react'
import Picker from 'emoji-picker-react';
import { FaSmileWink, FaSmileBeam } from 'react-icons/fa';
import { Progress } from '@chakra-ui/react'
const PostStatus = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [status, setStatus] = useState('');
  const [emojiPicker, setEmojiPicker] = useState(false);
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setStatus((status) => status + emojiObject.emoji);
  };

  const openEmojiPicker = () => {
    setEmojiPicker(!emojiPicker);
  }

  const handleChange = (e) => {
    setStatus(() => e.target.value);
  }

  const handleSubmit = async () => {
    console.log(status);
    const response = await fetch('/api/feed', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    console.log("response", response)
  }

  return (
    <Container>
        <InnerContainer>
            <h1>Daily Feed</h1>
                <div >
                    <Textarea onChange={handleChange} 
                    value={status}className="input-container" placeholder="What's on your mind?" rows={1}>
                    </Textarea>
                    <Box textAlign="left" display="flex" justifyContent="space-between">
                      <div className={emojiPicker ? "open-emoji" : "close-emoji"}>
                    <Picker pickerStyle={{ width: '100%', opacity: "1", transition: "all" }} onEmojiClick={onEmojiClick} />
                    </div>
                    <FaSmileWink className="wink-emoji" size={"1.4rem"} onClick={openEmojiPicker}/>
                    <Button onClick={handleSubmit} className="post-button" bg={"#3182CE"}     _focus={{ color: "inherit" }} _hover={{ bg: "teal.600" }}>Post</Button>
                    </Box>
                    <div>
                 </div>
             </div>
        </InnerContainer>
    </Container>
  )
}

export default PostStatus