import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShown: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.isShown = !state.isShown;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
