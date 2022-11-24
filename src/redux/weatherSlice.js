import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: [],
  search: '',
  favalues: JSON.parse(localStorage.getItem('test')) ? JSON.parse(localStorage.getItem('test')) : [],
  showeather: '',
  favHeartId: [],
  icon: '',
  favid: localStorage.getItem("favid") ? JSON.parse(localStorage.getItem("favid")) : [],
};

export const weatherSlice = createSlice({
  name: "weatherData",
  initialState,
  reducers: {
    weather: (state, action) => {
      state.value = action.payload;
    },
    addFavalue: (state, { payload }) => {
      const itemIndex = state.favalues.findIndex(
        (item) => item.location.woeid === payload.location.woeid
      );

      if (itemIndex >= 0) {
      }
      else {
        const temp = {
          ...payload,
        }
        state.favalues.push(temp);
        state.favHeartId.push(payload.location.woeid)
      }
      // if (state.favalues.location.woeid !== payload.location.woeid) {
      // }
      // console.log("payload", payload)
      // state.favalues.push(payload)
      // state.favHeartId.push(payload.location.woeid)
      localStorage.setItem("test", JSON.stringify(state.favalues))
      localStorage.setItem("FavHeartID", JSON.stringify(state.favHeartId))
      // localStorage.setItem('favid', JSON.stringify(state.favid))
    },
    removeValue: (state, { payload }) => {
      // const removeItem = state.favalues.filter((item) => item.location.woeid !== payload.location.woeid);
      // state.favalues = removeItem;
      // const removeId = state.favHeartId.filter((item) => item.location.woeid !== payload.location.woeid);

      // state.favalues = removeItem;
      // state.favHeartId = removeId;
      // localStorage.setItem("test", JSON.stringify(state.favalues))
      // localStorage.setItem("FavHeartID", JSON.stringify(state.favHeartId))
      const removeItem = state.favalues.filter((item) => item.location.woeid !== payload.location.woeid);
      state.favalues = removeItem;
      const removeId = state.favHeartId.filter((item) => item!== payload.location.woeid);
      state.favHeartId = removeId;
      localStorage.setItem('test', JSON.stringify(state.favalues));
      localStorage.setItem("FavHeartID", JSON.stringify(state.favHeartId))
    },
    showWeather: (state, { payload }) => {
      state.showeather = payload
      localStorage.setItem("showWeather", JSON.stringify(state.showeather))
    },
    removeWeather: (state) => {
      state.showeather = ""
      localStorage.removeItem("showWeather")
    },
    showToggleIcon: (state, { payload }) => {
      state.icon = payload
    },
    removeToggleIcon: (state,{payload}) => {
      state.icon = payload
    }
  },
});




// Action creators are generated for each case reducer function
export const { weather, addFavalue, removeValue, showWeather, removeWeather, showToggleIcon } = weatherSlice.actions;

export default weatherSlice;