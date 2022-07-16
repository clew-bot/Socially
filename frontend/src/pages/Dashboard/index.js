import React, { useEffect } from 'react';
import { Container, Grid, Displayer, FriendsTab } from '../../styled/dashboard.styled';
import { useNavigate } from 'react-router-dom';
import ChatContainer from '../../components/ChatContainer';
import ChatLog from '../../components/ChatLog';
const Dashboard = () => {





  return (
    <Grid>
      <FriendsTab>
        Welcome back, 
        </FriendsTab>
        <Displayer>

          <h2>What's happening?</h2>
          <ChatLog/>

        </Displayer>
    </Grid>
  )
}

export default Dashboard