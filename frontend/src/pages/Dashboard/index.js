import React, { useEffect } from 'react';
import { Container, Grid, Displayer, FriendsTab } from '../../styled/dashboard.styled';
import { useNavigate } from 'react-router-dom';
import ChatContainer from '../../components/ChatContainer';
const Dashboard = () => {




  return (
    <Grid>
      <FriendsTab>
        My Friends
        </FriendsTab>
        <Displayer>
          <ChatContainer>
          </ChatContainer>
        </Displayer>
    </Grid>
  )
}

export default Dashboard