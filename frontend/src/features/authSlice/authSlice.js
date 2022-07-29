import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const user = JSON.parse(localStorage.getItem("yllaicos1"))

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  console.log("i'm hit yo", user)
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
  const data = await response.json()
  console.log(data)
  if (data.loggedIn === false) {
    console.log("error", data.message)
    return thunkAPI.rejectWithValue(data.message)
  } else {
    localStorage.setItem("yllaicos1", JSON.stringify(data))
  }
})

export const logout = createAsyncThunk(
  "auth/logout",
  async (user, thunkAPI) => {
    try {
      const response = await fetch("/api/auth/logout")
      const data = await response.json()
      localStorage.removeItem("yllaicos1")

      console.log(data)
      alert("you have been logged out!")
      return thunkAPI.fulfillWithValue(data)
    } catch (err) {
      console.log(err)
    }
  },
)

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: false,
    user: user ? user : null,
    errorMessage: null,
    isError: false,
    loggedOut: false,
  },
  reducers: {},
  extraReducers: {
    [login.rejected]: (state, action) => {
      state.errorMessage = action.payload
      state.isError = true
    },
    [login.fulfilled]: (state, action) => {
      state.loggedIn = true
    },
    //Logouts the user
    [logout.fulfilled]: (state, action) => {
      state.loggedIn = false
      state.loggedOut = true
    },
  },
})

export const authSelector = (state) => state.auth

export const authActions = authSlice.actions

export default authSlice.reducer