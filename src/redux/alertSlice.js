import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alerts",
  initialState: {warnMessage:'', infoMessage:'', errorMessage:'',successMessage:'' },
  reducers: {
    warning: (state, action) => {
      const { message } = action.payload;

      state.warnMessage = message;
    },
    info: (state, action) => {
      const { message } = action.payload;

      state.infoMessage = message;
    },
    error: (state, action) => {
      const { message } = action.payload;

      state.errorMessage = message;
    },
    success: (state, action) => {
      const { message } = action.payload;

      state.successMessage = message;
    },

  },
});

export const alertActions = alertSlice.actions;

export default alertSlice;