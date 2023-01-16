import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const jwtToken = ("; " + document.cookie).split(`; jwt=`).pop().split(";")[0];


export const requestSlice = createSlice({
  name: "request",
  initialState: {
    data: [],
  },
  reducers: {
    getRequests: (state, action) => {
      state.data = [action.payload];
    },
  },
});

export const getRequestAsync = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.API_URL}/user/trip/get`, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });
    const unsortedData = res.data.data;
    const sortedData = unsortedData.sort((a, b) => b.id - a.id);
    dispatch(getRequests(sortedData));
  } catch (err) {
    console.log(err)

  }
};


export const { getRequests, searchRequest } = requestSlice.actions;
export const showRequest = (state) => state.request.data;
export default requestSlice.reducer;