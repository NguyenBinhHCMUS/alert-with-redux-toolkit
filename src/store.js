import { configureStore } from "@reduxjs/toolkit";
import { AlertSlice } from "./Alert/AlertSlice";

const reducer = {
  notifications: AlertSlice.reducer,
};

const store = configureStore({
  reducer,
});

export default store;
