import { createSlice } from '@reduxjs/toolkit';

export const isLoggedSlice = createSlice({
  name: 'isLogged',
  initialState: {
    value: false,
  },
  reducers: {
    loginMode: (state) => ({
      ...state,
      value: true,
    }),
    logoutMode: (state) => ({
      ...state,
      value: false,
    }),
  },
});

export const { loginMode, logoutMode } = isLoggedSlice.actions;

export const selectLogginStatus = (state) => state.isLogged.value;

export default isLoggedSlice.reducer;
