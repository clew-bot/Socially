import React, { useEffect } from 'react';
import { Container, Grid, Displayer, FriendsTab } from '../../styled/dashboard.styled';
import { useNavigate } from 'react-router-dom';
import ChatContainer from '../../components/ChatContainer';
import PostStatus from '../../components/PostStatus';
import ChatLog from '../../components/ChatLog';
const Dashboard = () => {





  return (
    <Grid>
      <FriendsTab>
        Welcome back, 
        </FriendsTab>
        <Displayer>
          <PostStatus/>
          <ChatLog/>
          <ChatLog/>
          <ChatLog/>
          <ChatLog/>
          <ChatLog/>
        </Displayer>
    </Grid>
  )
}

export default Dashboard