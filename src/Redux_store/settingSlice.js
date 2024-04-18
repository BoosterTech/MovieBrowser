import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
  name: "setting",
  initialState: {
    moviesPageNr: sessionStorage.getItem("moviesPageNr") || 1,
    peoplePageNr: sessionStorage.getItem("peoplePageNr") || 1,
    pageState: sessionStorage.getItem("pageState") || "movies",
    loadingState: "loading",
    searchState: false,
  },
  reducers: {
    setSearchState: (state, { payload: newState }) => {
      state.searchState = newState;
    },

    setPageNr: (state, { payload: number }) => {
      state.pageState === "movies"
        ? (state.moviesPageNr = number)
        : (state.peoplePageNr = number);
    },
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
        : (state.peoplePageNr = 500);
    },
    setFirstPage: (state) => {
      state.pageState === "movies"
        ? (state.moviesPageNr = 1)
        : (state.peoplePageNr = 1);
    },
    setBothPages: (state) => {
      state.moviesPageNr = 1;
      state.peoplePageNr = 1;
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
  setSearchState,
  setPageNr,
  setNextPage,
  setPreviousPage,
  setLastPage,
  setFirstPage,
  setBothPages,
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
export const selectSettingSearchValue = (state) =>
  selectState(state).searchState;
//
// export const selectMovieDetailsData = (state) => state.setting.data;

export default settingSlice.reducer;
