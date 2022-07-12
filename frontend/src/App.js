
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Header, HeaderLink } from "./styled/homepage.styled";
import GlobalHeader from "./components/GlobalHeader";

function App() {
  return (
<>
    <GlobalHeader />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
    </>
  );
}

export default App;
