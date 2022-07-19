import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

const user = JSON.parse(localStorage.getItem('yllaicos1'));


export const login = createAsyncThunk(
    'auth/login',
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
            // SET isError to true!
            return thunkAPI.rejectWithValue(data.message);
        } else {
        localStorage.setItem("yllaicos1", JSON.stringify(data));
            
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async (user, thunkAPI) => {
        try {
            const response = await fetch('/api/auth/logout');
            const data = await response.json();
            localStorage.removeItem('yllaicos1');
            // setLogged(false);
            console.log(data);
            alert("You have been logged out", data);
          } catch (err) {
            console.log(err);
          }
        }
)


const authSlice = createSlice({
    name: "auth",
    initialState: {
        loggedIn: false,
        user: user ? user : null,
        errorMessage: null,
        isError: false,
    },
    reducers: {
        // login(state, action) {
        //     console.log("hi")
        // },
        // logout(state, action) {
        //     console.log("hi")

        // }
    },
    extraReducers: {
        [login.rejected]: (state, action)=> {
            state.errorMessage = action.payload;
            state.isError = true;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;