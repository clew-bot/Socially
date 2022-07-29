import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';


export const createPost = createAsyncThunk(
    'feed/createPost',
    async (status, thunkAPI) => {
        console.log("feed hit", JSON.stringify(status))
        const response = await fetch('/api/feed/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({status}),
        });
        const data = await response.json();
        console.log(data)
       
    }
);


const feedSlice = createSlice({
    name: "feed",
    initialState: {
        isError: false,
        errorMessage: null,
    },
    reducers: {
    },
    extraReducers: {
        [createPost.rejected]: (state, action)=> {
            state.errorMessage = action.payload;
            state.isError = true;
        },
        [createPost.fulfilled]: (state, action)=> {
        },
        //Logouts the user
        [createPost.fulfilled]: (state, action) => {

        }
    }
});

export const feedActions = feedSlice.actions;

export default feedSlice.reducer;