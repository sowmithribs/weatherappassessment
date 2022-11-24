import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "`",
  icon: ""
};

export const iconSlice = createSlice({
  name: "iconStatus",
  initialState,
  reducers: {
    showIcon: (state) => {
      state.value = "open";
    },
    toggleIcon: (state, { payload }) => {
      state.icon = payload
      localStorage.setItem("toggleIcon",state.icon)
    }
  },
});

// Action creators are generated for each case reducer function
export const { showIcon, toggleIcon } = iconSlice.actions;

export default iconSlice;
