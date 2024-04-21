import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
  name: "setting",
  initialState: {
    moviesPageNr: sessionStorage.getItem("moviesPageNr") || 1,
    peoplePageNr: sessionStorage.getItem("peoplePageNr") || 1,
    searchPageNr: sessionStorage.getItem("searchPageNr") || 1,
    pageState: sessionStorage.getItem("pageState") || "movies",
    loadingState: "loading",
    searchState: false,
  },
  reducers: {
    setSearchState: (state, { payload: newState }) => {
      state.searchState = newState;
    },

    setPageNr: (state, { payload: number }) => {
      if (state.pageState === "movies") state.moviesPageNr = number;
      else if (state.pageState === "people") state.peoplePageNr = number;
      else if (state.searchState === true) state.searchPageNr = number;
    },
    setNextPage: (state) => {
      if (state.pageState === "movies") state.moviesPageNr++;
      else if (state.pageState === "people") state.peoplePageNr++;
      else if (state.searchState === true) state.searchPageNr++;
    },
    setPreviousPage: (state) => {
      if (state.pageState === "movies") state.moviesPageNr--;
      else if (state.pageState === "people") state.peoplePageNr--;
      else if (state.searchState === true) state.searchPageNr--;
    },
    setLastPage: (state, { payload: maxNumber = 500 }) => {
      if (state.pageState === "movies") state.moviesPageNr = maxNumber;
      else if (state.pageState === "people") state.peoplePageNr = maxNumber;
      else state.searchPageNr = maxNumber;
    },
    setFirstPage: (state) => {
      if (state.pageState === "movies") state.moviesPageNr = 1;
      else if (state.pageState === "people") state.peoplePageNr = 1;
      else state.searchPageNr = 1;
    },
    setBothPages: (state) => {
      state.moviesPageNr = 1;
      state.peoplePageNr = 1;
      state.searchPageNr = 1;
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
export const selectSettingSearchPageNrValue = (state) =>
  selectState(state).searchPageNr;

export default settingSlice.reducer;
