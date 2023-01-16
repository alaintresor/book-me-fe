import { createSlice } from "@reduxjs/toolkit";

const tripsSlice = createSlice({
  name: "trips",
  initialState: {trips:null,tripRequest:null,comments:null,getLocation:true,getComments:true },
  reducers: {
    getTripRequests(state, action) {
      const {trips} = action.payload;
      state.trips = trips;
    },
    updateTripRequests(state, action) {
      const {index,property,value} = action.payload;
      state.trips[index] ? state.trips[index][`${property}`] = value: state.trips[index]={
        [`${property}`] : value
      }
    },
    openTripRequest(state, action) {
      const {value} = action.payload;
      state.tripRequest = value;
    },
    comments(state, action) {
      const {comments} = action.payload;
      state.comments = comments;
    },
    fetchComments(state, action) {
      const {getComments} = action.payload;
      state.getComments = getComments;
    },
    fetchLocation(state, action) {
      const {getLocation} = action.payload;
      state.getLocation = getLocation;
    },
  },
});

export const tripsActions = tripsSlice.actions;

export default tripsSlice;
