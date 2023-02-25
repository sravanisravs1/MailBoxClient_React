import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  token: null,
};

export const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
 reducers:{
    login(state, action) {
      state.token = action.payload;
    },
  },
});

export const authActions = authSlice.actions;