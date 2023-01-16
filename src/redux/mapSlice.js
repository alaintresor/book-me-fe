import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
  name: "auth",
  initialState: { geoLocation:"" },
  reducers: {
    setGeoLocation(state, action) {
      const {geoLocation}= action.payload;

      state.geoLocation = geoLocation;
    },
  },
});

export const mapActions = mapSlice.actions;

export default mapSlice;
