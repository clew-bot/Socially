import React, { useEffect, useState } from 'react';
import { Container, Grid, Displayer, FriendsTab } from '../../styled/dashboard.styled';
import { Navigate, useNavigate } from 'react-router-dom';
import ChatContainer from '../../components/ChatContainer';
import PostStatus from '../../components/PostStatus';
import ChatLog from '../../components/ChatLog';
import AboutDash from "../../components/AboutDash";
const Dashboard = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [lastLogged, setLastLogged] = useState(false);
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [id, setId] = useState("");
  const [ details, setDetails ] = useState({ name: "", email: "", lastLogged: "", gender:"" });

  useEffect(() => {
      const vals = JSON.parse(localStorage.getItem("yllaicos1"));
      if (vals === null) {
        navigate("/login")
      }
  }, [])
  return (
    <Grid>
      {name}
      <FriendsTab>
      
        <AboutDash  name={name}>
        </AboutDash>
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