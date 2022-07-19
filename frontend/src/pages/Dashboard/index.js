import React, { useEffect, useState } from 'react';
import { Container, Grid, Displayer, FriendsTab } from '../../styled/dashboard.styled';
import { useNavigate } from 'react-router-dom';
import ChatContainer from '../../components/ChatContainer';
import PostStatus from '../../components/PostStatus';
import ChatLog from '../../components/ChatLog';
import AboutDash from "../../components/AboutDash";
const Dashboard = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [lastLogged, setLastLogged] = useState(false);
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [id, setId] = useState("");
  const [ details, setDetails ] = useState({ name: "", email: "", lastLogged: "", gender:"" });

  useEffect(() => {
      const vals = JSON.parse(localStorage.getItem("yllaicos1"));
  

      console.log("the details: ", vals);
      setId(vals.id)
      setGender(vals.gender)
      setLastLogged(vals.lastLogged)
      setBirthday(vals.birthday)
      setName(vals.username)
      console.log(name)
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