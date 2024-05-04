import { createSelector, createSlice } from "@reduxjs/toolkit";

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
export const selectSettingPageStateValue = createSelector(
  [selectState],
  (setting) => setting.pageState
);

export const selectSettingLoadingValue = createSelector(
  [selectState],
  (setting) => setting.loadingState
);

export const selectSettingMoviePageNrValue = createSelector(
  [selectState],
  (setting) => setting.moviesPageNr
);

export const selectSettingPeoplePageNrValue = createSelector(
  [selectState],
  (setting) => setting.peoplePageNr
);

export const selectSettingSearchValue = createSelector(
  [selectState],
  (setting) => setting.searchState
);

export const selectSettingSearchPageNrValue = createSelector(
  [selectState],
  (setting) => setting.searchPageNr
);

export const selectSettingSearchMaxPageNrValue = createSelector(
  [selectState],
  (setting) => setting.searchMaxPageNr
);

export const selectSettingQueryValue = createSelector(
  [selectState],
  (setting) => setting.query
);

export default settingSlice.reducer;
