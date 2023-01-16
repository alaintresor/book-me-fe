import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./alertSlice";
import authSlice from "./auth/authSlice";
import loginReducer from "./auth/loginSlice";
import mapSlice from "./mapSlice";
import requestSlice from "./requests/requestSlice";
import tripsSlice from "./tripsSlice";
import accommodationsSlice from "./accommodationsSlice";
import notificationSlice from "./notificationSlice";
import selectedRequestSlice from "./requests/selectedRequestSlice";
import accomodationReducer from "./requests/accomodationSlice";

export const reducers = {
  auth: authSlice.reducer,
  alert: alertSlice.reducer,
  login: loginReducer,
  request: requestSlice,
  accommodations: accommodationsSlice.reducer,
  trips: tripsSlice.reducer,
  map: mapSlice.reducer,
  notification: notificationSlice,
  selectedRequest: selectedRequestSlice,
  facility: accomodationReducer,
};


const store = configureStore({
  reducer: {
    ...reducers,
    devTools: process.env.NODE_ENV !== "production",
  },
});

export default store;