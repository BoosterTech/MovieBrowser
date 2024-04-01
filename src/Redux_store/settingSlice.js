import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
  name: "setting",
  initialState: {
    moviesPageNr: 1,
    peoplePageNr: 1,
    pageState: "movies", //switch between movies & people
    loadingState: "loading",
  },
  reducers: {
    setNextPage: (state) => {
      state.pageState === "movies"
        ? state.moviesPageNr++
        : state.peoplePageNr++;
    },
    setPreviousPage: (state) => {
      state.pageState === "movies"
        ? state.moviesPageNr--
        : state.peoplePageNr--;
    },
    setLastPage: (state) => {
      state.pageState === "movies"
        ? (state.moviesPageNr = 500)
        : state.peoplePageNr = 500;
    },
    setFirstPage: (state) => {
      state.pageState === "movies"
        ? (state.moviesPageNr = 1)
        : (state.peoplePageNr = 1);
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
export const selectSettingMoviePageNrValue = (state) =>
  selectState(state).moviesPageNr;
export const selectSettingPeoplePageNrValue = (state) =>
  selectState(state).peoplePageNr;

export default settingSlice.reducer;
