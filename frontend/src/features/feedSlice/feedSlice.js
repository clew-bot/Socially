import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const createPost = createAsyncThunk(
  "feed/createPost",
  async (status, thunkAPI) => {
    console.log("feed hit", JSON.stringify(status))
    const response = await fetch("/api/feed/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
    const data = await response.json()
    console.log(data)
  },
)

export const getFeed = createAsyncThunk(
  "feed/getFeed",
  async (_, thunkAPI) => {
    const response = await fetch("/api/feed/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await response.json()
    if (data.isAuth === true) {
      console.log(data)
      return thunkAPI.fulfillWithValue(data.posts)
  } else {
    return thunkAPI.rejectWithValue("You are not logged in")
    }
  }
)

export const feedSlice = createSlice({
  name: "feed",
  initialState: {
    isError: false,
    success: false,
    errorMessage: null,
    posts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPost.rejected, (state, action) => {
      state.errorMessage = action.payload
      state.isError = true
      
    });

    builder.addCase(createPost.fulfilled, (state, action) => {});

    builder.addCase(getFeed.fulfilled, (state, action) => {
      console.log("Action payload: ", action.payload);      
      state.posts.push(...state.posts, action.payload);
      state.success = true;

    });
  }
})

export const feedSelector = (state) => state.feed

export const feedActions = feedSlice.actions

export default feedSlice.reducer
