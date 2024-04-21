import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
  name: "setting",
  initialState: {
    moviesPageNr: sessionStorage.getItem("moviesPageNr") || 1,
    peoplePageNr: sessionStorage.getItem("peoplePageNr") || 1,
    searchPageNr: 1,
    searchMaxPageNr: 1,
    pageState: sessionStorage.getItem("pageState") || "movies",
    loadingState: "loading",
    searchState: false,
    query: "",
  },
  reducers: {
    setSearchState: (state, { payload: newState }) => {
      state.searchState = newState;
    },

    setSearchMaxPageNr: (state, { payload: number }) => {
      state.searchMaxPageNr = number;
    },
    setPageNr: (state, { payload: number }) => {
      if (state.searchState) state.searchPageNr = number;
      else {
        if (state.pageState === "movies") state.moviesPageNr = number;
        if (state.pageState === "people") state.peoplePageNr = number;
      }
    },
    setNextPage: (state) => {
      if (state.searchState) state.searchPageNr++;
      else {
        if (state.pageState === "movies") state.moviesPageNr++;
        if (state.pageState === "people") state.peoplePageNr++;
      }
    },
    setPreviousPage: (state) => {
      if (state.searchState === true) state.searchPageNr--;
      else {
        if (state.pageState === "movies") state.moviesPageNr--;
        if (state.pageState === "people") state.peoplePageNr--;
      }
    },
    setLastPage: (state, { payload: maxNumber = 500 }) => {
      if (state.searchState === true) state.searchPageNr = maxNumber;
      else {
        if (state.pageState === "movies") state.moviesPageNr = maxNumber;
        if (state.pageState === "people") state.peoplePageNr = maxNumber;
      }
    },
    setFirstPage: (state) => {
      if (state.searchState === true) state.searchPageNr = 1;
      else {
        if (state.pageState === "movies") state.moviesPageNr = 1;
        if (state.pageState === "people") state.peoplePageNr = 1;
      }
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
    setQuery: (state, { payload: query }) => {
      state.query = query;
    },
  },
});

export const {
  setQuery,
  setSearchState,
  setSearchMaxPageNr,
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
export const selectSettingSearchMaxPageNrValue = (state) =>
  selectState(state).searchMaxPageNr;
export const selectSettingQueryValue = (state) => selectState(state).query;

export default settingSlice.reducer;
