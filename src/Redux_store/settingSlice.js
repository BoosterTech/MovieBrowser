import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
  name: "setting",
  initialState: {
    pageNr: 1,
    pageState: "movies", //switch between movies & people
    loadingState: "loading",
  },
  reducers: {
    setNextPage: (state) => {
      state.pageNr++;
    },
    setPreviousPage: (state) => {
      state.pageNr--;
    },
    setLastPage: (state) => {
      state.pageNr = 500;
    },
    setFirstPage: (state) => {
      state.pageNr = 1;
    },
    setPageState: (state, { payload: newState }) => {
      state.pageState = newState;
    },
    setLoadingState: (state, { payload: newState }) => {
      state.loadingState = newState;
    },
  },
});

export const {
  setNextPage,
  setPreviousPage,
  setLastPage,
  setFirstPage,
  setPageState,
  setLoadingState,
} = settingSlice.actions;

export const selectState = (state) => state.setting;
export const selectSettingPageStateValue = (state) =>
  selectState(state).pageState;
export const selectSettingLoadingValue = (state) =>
  selectState(state).loadingState;
export const selectsettingPageNrValue = (state) => selectState(state).pageNr;

export default settingSlice.reducer;
