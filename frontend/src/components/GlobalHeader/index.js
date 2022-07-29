import React, { useState, useEffect } from "react"
import { Header, HeaderLink } from "../../styled/homepage.styled"
import {
  RiDashboardFill,
  RiLogoutBoxRFill,
  RiHomeSmile2Fill,
} from "react-icons/ri"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout } from "../../features/authSlice/authSlice.js"

const GlobalHeader = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loggedOut } = useSelector((state) => state.auth)
  const user = JSON.parse(localStorage.getItem("yllaicos1")) || null
  const [logged, setLogged] = useState(false)
  const handleLogout = async () => {
    try {
      dispatch(logout())
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    if (loggedOut) {
      navigate("/login")
    }
  }, [loggedOut])

  return (
    <Header>
      <HeaderLink to={"/"}>Socially</HeaderLink>
      {user ? (
        <div className="icons-section">
          <RiDashboardFill size={"2rem"} color={"#6B46C1"} />
          <RiLogoutBoxRFill
            onClick={handleLogout}
            size={"2rem"}
            color={"#6B46C1"}
          />
        </div>
      ) : (
        <RiHomeSmile2Fill />
      )}
    </Header>
  )
}

export default GlobalHeader
