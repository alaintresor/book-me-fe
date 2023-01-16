import { createSlice } from "@reduxjs/toolkit";

export const selectedRequestSlice = createSlice({
  name: "selectedRequest",
  initialState: {
    data: "",
  },
  reducers: {
    selectRequest: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { selectRequest } = selectedRequestSlice.actions;

export const showRequest = (state) => state.request.data;
export default selectedRequestSlice.reducer;
