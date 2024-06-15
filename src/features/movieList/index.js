import { ContentHeader, ContentWrapper, TilesContainer } from "./styled";
import { LoadingSpinner } from "../../common/Loader";
import { useDispatch, useSelector } from "react-redux";
import MovieTile from "./components/MovieTile";
import { useEffect, useState } from "react";

import {
  selectSettingLoadingValue,
  selectSettingPageStateValue,
  selectSettingMoviePageNrValue,
  setLoadingState,
  setPageState,
  setPageNr,
  selectSettingSearchValue,
  selectSettingSearchPageNrValue,
  setSearchMaxPageNr,
} from "../../Redux_store/settingSlice";
import { toMovieDetails } from "../../routes";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import searchQueryParamName from "../../common/Navigation/components/Search/searchQueryParamName";
import SearchPage from "../../common/SearchPage";
import NoResultPage from "../../common/noResult";
import ErrorPage from "../../common/Error";
import useDebounce from "../../hooks/useDebounce";
import {
  API_AUTHORIZATION,
  ApiPopularMovies,
  DEFAULT_DEBOUNCE_TIME,
  SEARCH_RESULTS_TITLE,
} from "../../common/globalVariables";
import { movieGenres_ids } from "../../common/fetchMoviesGenres";
import MoviesNav from "./components/MoviesNav";
const DEFAULT_PAGE_STATE = "movies";
const POPULAR_MOVIES_TITLE = "Popular Movies";

const MovieListPage = () => {
  const [moviesData, setMoviesData] = useState(null);
  const [isFirstEffect, setIsFirstEffect] = useState(true);
  const [Genres, setGenres] = useState({});

  const dispatch = useDispatch();
  const [totalResults, setTotalResults] = useState(null);

  const moviePageNr = useSelector(selectSettingMoviePageNrValue);
  const pageState = useSelector(selectSettingPageStateValue);
  const searchPageNr = useSelector(selectSettingSearchPageNrValue);
  const loadingState = useSelector(selectSettingLoadingValue);
  const searchState = useSelector(selectSettingSearchValue);

  const location = useLocation();
  const history = useHistory();
  const myQuery = new URLSearchParams(location.search).get(
    searchQueryParamName
  );

  useEffect(() => {
    movieGenres_ids.then((result) => setGenres(result));
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search).get("page");
    const path = location.pathname;

    dispatch(setLoadingState("loading"));
    dispatch(setPageState(DEFAULT_PAGE_STATE));

    if (params && path.includes("/movies")) dispatch(setPageNr(Number(params)));

    sessionStorage.setItem("pageState", DEFAULT_PAGE_STATE);
    sessionStorage.setItem("moviesPageNr", moviePageNr);
    setIsFirstEffect(false);
  }, [moviePageNr, searchPageNr]);

  useEffect(() => {
    dispatch(setPageNr(1));
  }, [myQuery]);

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get("search");
    const newPath = `?page=${searchState ? searchPageNr : moviePageNr}${
      searchQuery ? `&search=${searchQuery}` : ""
    }`;

    if (location.search !== newPath && !isFirstEffect) {
      history.push(newPath);
    }
  }, [moviePageNr, myQuery, searchPageNr, isFirstEffect, location.search]);

  useEffect(() => {
    if (searchState === true && (!moviesData || moviesData.length === 0)) {
      dispatch(setLoadingState("noResult"));
    } else {
      dispatch(setPageState(DEFAULT_PAGE_STATE));
    }
  }, [searchState, moviesData, dispatch]);

  const debouncedQuery = useDebounce(myQuery, DEFAULT_DEBOUNCE_TIME);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const responseMovies = await fetch(
          searchState && debouncedQuery !== null
            ? `https://api.themoviedb.org/3/search/movie?query=${myQuery}&include_adult=false&language=en-US&page=${searchPageNr}`
            : `${ApiPopularMovies}${moviePageNr}`,
          {
            headers: {
              Authorization: API_AUTHORIZATION,
              Accept: "application/json",
            },
          }
        );

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
  }, [moviePageNr, searchPageNr, debouncedQuery]);

  if (loadingState === "error") {
    return <ErrorPage />;
  }

  return loadingState === "loading" ? (
    searchState ? (
      <ContentWrapper>{SearchPage(myQuery)}</ContentWrapper>
    ) : (
      <LoadingSpinner />
    )
  ) : (
    (pageState === DEFAULT_PAGE_STATE || searchState === true) &&
      (searchState === true && (!moviesData || moviesData.length === 0) ? (
        NoResultPage(debouncedQuery)
      ) : (
        <ContentWrapper>
          <MoviesNav />
          <ContentHeader>
            {!searchState || myQuery === null
              ? POPULAR_MOVIES_TITLE
              : `${SEARCH_RESULTS_TITLE} "${myQuery}" (${totalResults})`}
          </ContentHeader>
          <TilesContainer>
            {moviesData &&
              moviesData.map((movie) => {
                const movieGenres = movie.genre_ids.map((id) => Genres[id]);
                return (
                  <NavLink
                    to={toMovieDetails({ id: movie.id })}
                    key={`movie-${movie.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <MovieTile
                      title={movie.title}
                      imageSrc={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                          : null
                      }
                      category={movieGenres}
                      year={movie.release_date.substring(0, 4)}
                      rate={movie.vote_average}
                      vote={movie.vote_count}
                    />
                  </NavLink>
                );
              })}
          </TilesContainer>
        </ContentWrapper>
      ))
  );
};

export default MovieListPage;
