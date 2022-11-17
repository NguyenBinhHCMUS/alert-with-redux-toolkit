import { createSlice } from "@reduxjs/toolkit";

export const AlertSlice = createSlice({
  name: "alert",
  initialState: {
    alerts: [],
  },
  reducers: {
    createAlert: (state, action) => {
      state.alerts.push({
        message: action.payload.message,
        type: action.payload.type,
      });
    },
  },
  //   extraReducers: {
  //     [extraAction]: (state, action) => {
  //       state.alerts.push({ message: action.errpr.message, type: "error" });
  //     },
  //   },
});

const { actions, reducer } = AlertSlice;

export const { createAlert } = actions;

export default reducer;
