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
  async (pageNumber, thunkAPI) => {
    console.log("Page Number: ", pageNumber)
    try {
      const response = await fetch(`/api/feed/${pageNumber}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json()
        return data;
    } catch (error) {
    return thunkAPI.rejectWithValue("You are not logged in")
    }
  }
)

export const getMoreFeed = createAsyncThunk(
  "feed/getMoreFeed",
  async (pageNumber, thunkAPI) => {
    console.log(pageNumber)
    try {
      const response = await fetch(`/api/feed/${pageNumber}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json()
      if (data.isAuth) {
      return data
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const feedSlice = createSlice({
  name: "feed",
  initialState: {
    isError: false,
    loading: false,
    errorMessage: null,
    posts: [],
    hasMorePosts: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPost.rejected, (state, action) => {
      state.errorMessage = action.payload
      state.isError = true
      
    });
    builder.addCase(createPost.fulfilled, (state, action) => {});


    builder.addCase(getFeed.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(getFeed.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts;
      // state.posts = [...state.posts, ...action.payload];
      console.log("Posts: ", state.posts)
    });






    builder.addCase(getMoreFeed.pending, (state, action) => {
      state.loading = true;
    })


    builder.addCase(getMoreFeed.fulfilled, (state, action) => {
      state.loading = false;
      console.log("da length: ",action.payload.posts.length)
      if (action.payload.posts.length) {
      state.posts = [...state.posts, ...action.payload.posts];
      // state.posts.push(action.payload.posts);
      } else {
        console.log("Hello more posts else")
        state.hasMorePosts = false;
      }
      console.log("Getting more posts: ", state.posts)
    });



    builder.addCase(getMoreFeed.rejected, (state, action) => {
      state.errorMessage = action.payload
      state.isError = true
    }
    );
  }
})

export const feedSelector = (state) => state.feed

export const feedActions = feedSlice.actions

export default feedSlice.reducer
