import { createSlice } from "@reduxjs/toolkit";

const accommodationsSlice = createSlice({
  name: "accommodations",
  initialState: {accommodations:null,getLocation:false,getReviews:false},
  reducers: {
    getAccommodations(state, action) {
      const {accommodations} = action.payload;
      state.accommodations = accommodations;
    },
    fetchLocation(state, action) {
      const {getLocation} = action.payload;
      state.getLocation = getLocation;
    },
    fetchReviews(state, action) {
      const {getReviews} = action.payload;
      state.getReviews = getReviews;
    },
    updateAccommodations(state, action) {
      const {index,property,value} = action.payload;
      state.accommodations[index] ? state.accommodations[index][`${property}`] = value: state.accommodations[index]={
        [`${property}`] : value
      }
    },
  },
});

export const accommodationsActions = accommodationsSlice.actions;

export default accommodationsSlice;