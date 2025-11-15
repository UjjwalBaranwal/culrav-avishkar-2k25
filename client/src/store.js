// redux store
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/auth/authSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
