import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";
import iconSlice from "./iconSlice";
import modalSlice from "./modalSlice";
import favReducer from './favSlice'

export const store = configureStore({
  reducer: {
    weatherData: weatherSlice.reducer,
    modalStatus: modalSlice.reducer,
    iconStatus: iconSlice.reducer,
    favStatus: favReducer.reducer
  },
});

