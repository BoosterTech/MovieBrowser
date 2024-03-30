import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    pageNr: 1,
    state: "loading",
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },

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
  addMovies,
  updateState,
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectMoviesPageNr = (state) => selectMoviesState(state).pageNr;
export const selectMovieStateValue = (state) => selectMoviesState(state).state;

export const selectMoviesEmpty = (state) => selectMovies(state).length === 0;

export default moviesSlice.reducer;
