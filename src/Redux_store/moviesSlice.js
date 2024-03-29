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

    nextPage: ({ pageNr }) => {
      pageNr++;
    },
    previousPage: ({ pageNr }) => {
      pageNr--;
    },

    updateState: (state, { payload: newState }) => {
      state.state = newState;
    },
  },
});

export const { nextPage, previousPage, addMovies, updateState } =
  moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectMoviesPageNr = (state) => selectMoviesState(state).pageNr;
export const selectMovieStateValue = (state) => selectMoviesState(state).state;

export const selectMoviesEmpty = (state) => selectMovies(state).length === 0;

export default moviesSlice.reducer;
