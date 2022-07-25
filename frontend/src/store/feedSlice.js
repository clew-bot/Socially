import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';


export const createPost = createAsyncThunk(
    'feed/createPost',
    async (user, thunkAPI) => {
        console.log("i'm hit yo", user)
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        console.log(data)
        if (data.loggedIn === false) {
            console.log("error", data.message)
            return thunkAPI.rejectWithValue(data.message);
        } else {
        localStorage.setItem("yllaicos1", JSON.stringify(data));
            
        }
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