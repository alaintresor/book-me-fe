import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
  },
  reducers: {
    logginUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { logginUser } = LoginSlice.actions;
export const thisUser = (state) => state.login;

export default LoginSlice.reducer;
