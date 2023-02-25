import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./Auth-slice";
import emailSlice  from './emailSlice';

const store = configureStore({
  reducer: { auth: authSlice.reducer },
  email: emailSlice.reducer,
});

export default store;