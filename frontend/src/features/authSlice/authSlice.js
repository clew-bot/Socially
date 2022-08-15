import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"



export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
  const data = await response.json()
  if (data.loggedIn === false) {
    console.log("error", data.message)
    return thunkAPI.rejectWithValue(data.message)
  } else {
    localStorage.setItem("yllaicos1", JSON.stringify(data))
    return thunkAPI.fulfillWithValue(data)
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
      // alert("you have been logged out!")
      return thunkAPI.fulfillWithValue(data)
    } catch (err) {
      console.log(err)
    }
  },
)

export const authCheck = createAsyncThunk(
  "auth/authCheck",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("/api/auth/authCheck")
      const data = await response.json()
      if (data.loggedIn === false) {
        return thunkAPI.rejectWithValue(data.message)
      } else {
        return thunkAPI.fulfillWithValue(data)
      }
    } catch (err) {
      console.log(err)
    }
  },
)
const user = JSON.parse(localStorage.getItem("yllaicos1"))
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
  extraReducers: (builder) => {
    builder.addCase(login.rejected, (state, action) => {
      state.errorMessage = action.payload
      state.isError = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.errorMessage = null;
      state.loggedIn = true
      state.loggedOut = false
      state.user = action.payload;
    })
  
    builder.addCase(logout.fulfilled, (state, action) => {
      
      state.loggedIn = false
      state.loggedOut = true
      state.user = null;
    })

    builder.addCase(authCheck.rejected, (state, action) => {
      
      state.loggedIn = false
      state.loggedOut = true
      state.user = null;
    })

    builder.addCase(authCheck.fulfilled, (state, action) => {
      state.loggedIn = true
      state.loggedOut = false
      state.user = action.payload;
    }
    )
  }
})


export const authSelector = (state) => state.auth

export const authActions = authSlice.actions

export default authSlice.reducer
