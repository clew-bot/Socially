import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../features/authSlice/authSlice";
import feedSlice from "../features/feedSlice/feedSlice";


const store = configureStore({
  reducer: {
    auth: authSlice,
    feed: feedSlice,

  },
})

export default store
