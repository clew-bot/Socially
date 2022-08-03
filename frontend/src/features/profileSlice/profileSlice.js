import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"



// export const getFeed = createAsyncThunk(
//   "feed/getFeed",
//   async (_, thunkAPI) => {
//     const response = await fetch("/api/feed/", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//     const data = await response.json()
//     if (data.isAuth === true) {
//       console.log(data)
//       // return thunkAPI.fulfillWithValue(data.posts)
//       return data.posts
//   } else {
//     return thunkAPI.rejectWithValue("You are not logged in")
//     }
//   }
// )

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    // isError: false,
    // success: false,
    // errorMessage: null,
    // posts: [],
  },
  reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(createPost.rejected, (state, action) => {
//       state.errorMessage = action.payload
//       state.isError = true
      
//     });

//     builder.addCase(createPost.fulfilled, (state, action) => {});

//     builder.addCase(getFeed.fulfilled, (state, action) => {
//       state.posts = action.payload;

//     });
//   }
})

export const profileSelector = (state) => state.profile

export const profileActions = profileSlice.actions

export default profileSlice.reducer
