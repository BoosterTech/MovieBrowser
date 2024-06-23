import { useEffect } from "react";
import {
  ApiNowPlayingMovies,
  ApiPopularMovies,
  ApiTopRatedMovies,
  ApiUpcomingMovies,
} from "../common/globalVariables";

const getUrl = (state) => {
  var url = ApiPopularMovies;

  switch (state.toLowerCase()) {
    case "popular":
      url = ApiPopularMovies;
      break;
    case "upcoming":
      url = ApiUpcomingMovies;
      break;
    case "top rated":
      url = ApiTopRatedMovies;
      break;
    case "now playing":
      url = ApiNowPlayingMovies;
      break;

    default:
      url = ApiPopularMovies;
  }
  return url;
};

const useFetchMovies = (
  searchState,
  debouncedQuery,
  myQuery,
  searchPageNr,
  movieState,
  moviePageNr,
  fetchOptions,
  setMoviesData,
  setTotalResults,
  dispatch,
  setSearchMaxPageNr,
  setLoadingState
) => {
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url =
          searchState && debouncedQuery !== null
            ? `https://api.themoviedb.org/3/search/movie?query=${myQuery}&include_adult=false&language=en-US&page=${searchPageNr}`
            : `${getUrl(movieState)}${moviePageNr}`;

        const responseMovies = await fetch(url, { ...fetchOptions });

        if (!responseMovies.ok) {
          throw new Error("Response not OK");
        }

        const { results, total_pages, total_results } =
          await responseMovies.json();

        setMoviesData(results);
        setTotalResults(total_results);
        dispatch(setSearchMaxPageNr(total_pages));
        dispatch(setLoadingState("success"));
      } catch (error) {
        dispatch(setLoadingState("error"));
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, [moviePageNr, searchPageNr, debouncedQuery, movieState]);
};

export default useFetchMovies;
