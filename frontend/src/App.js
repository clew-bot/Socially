
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Header, HeaderLink } from "./styled/homepage.styled";
import GlobalHeader from "./components/GlobalHeader";
import RequireAuth from './components/RequireAuth';
import Profile from "./pages/Profile"
function App() {
  return (
<>
    <GlobalHeader />
    <Routes>


      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/profile/:id" element={<Profile/>} />
      <Route path="/dashboard" element={<RequireAuth Component={Dashboard}/>} />

    </Routes>
    </>
  );
}

export default App;
