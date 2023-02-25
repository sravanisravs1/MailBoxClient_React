import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isLoggedIn: false,
    token: null,
};

export const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
 reducers:{
    login(state, action) {
        state.isLoggedIn = "true";
      state.token = action.payload;
    },
    logout(state, action) {
        state.isLoggedIn = "false";
        state.token = null;
      },
  },
});

export const authActions = authSlice.actions;