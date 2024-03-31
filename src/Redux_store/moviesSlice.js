import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    pageNr: 1,
    state: "loading",
  },
  reducers: {

    nextPage: (state) => {
      state.pageNr++;
    },
    previousPage: (state) => {
      state.pageNr--;
    },
    setLastPage: (state) => {
      state.pageNr = 500;
    },
    setFirstPage: (state) => {
      state.pageNr = 1;
    },
    updateState: (state, { payload: newState }) => {
      state.state = newState;
    },
  },
});

export const {
  nextPage,
  previousPage,
  setLastPage,
  setFirstPage,
  updateState,
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMoviesPageNr = (state) => selectMoviesState(state).pageNr;
export const selectMovieStateValue = (state) => selectMoviesState(state).state;

export default moviesSlice.reducer;
