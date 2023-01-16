import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const jwtToken = ("; " + document.cookie).split(`; jwt=`).pop().split(";")[0];

export const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    data: [],
  },
  reducers: {
    getNotifications: (state, action) => {
      state.data = [action.payload];
    },
  },
});

export const getNotificationsAsync = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.API_URL}/user/notification/get`, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });
    dispatch(getNotifications(res.data.data));
  } catch (err) {
    console.log(err)
  }
};

export const { getNotifications } = notificationSlice.actions;
export const showNotifications = (state) => state.notification.data;
export default notificationSlice.reducer;

