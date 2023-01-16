import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, token: null },
  reducers: {
    login: (state, action) => {
      console.log('logined...................')
      const { isLoggedIn, token } = action.payload;
 console.log('token',token)
      state.isLoggedIn = isLoggedIn;
      state.token = token;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
