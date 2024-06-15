export const API_BASE_URL = "https://api.themoviedb.org/3/";
export const API_AUTHORIZATION =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjI2MDE5NmJjOWJiYjBkZjdiZDc0N2NmMDEzNTdjMCIsInN1YiI6IjY2MDAwZmZjNjJmMzM1MDE2NDUxNWJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5BdMVijb7g_8sAaxu9WLzzFLGen6qB1lNYLha-96Tw";

export const ApiPopularMovies =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=";
export const ApiPopularMoviesWithParams =
  "https://api.themoviedb.org/3/search/movie";
export const ApiUpcomingMovies =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=";
export const ApiTopRatedMovies =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=";

export const API_PEOPLE_POPULAR_URL =
  "https://api.themoviedb.org/3/person/popular?language=en-US&page=";
export const URLImages = "https://image.tmdb.org/t/p/";
export const backdropURL = `${URLImages}w1920_and_h800_multi_faces`;
export const DEFAULT_DEBOUNCE_TIME = 500;
export const SEARCH_RESULTS_TITLE = "Search Results for";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const fetchOptions = {
  method: "GET",
  headers: {
    Authorization: API_AUTHORIZATION,
    Accept: "application/json",
  },
};
