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
  selectSettingMovieStateValue,
} from "../../Redux_store/settingSlice";
import { toMovieDetails } from "../../routes";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import searchQueryParamName from "../../common/Navigation/components/Search/searchQueryParamName";
import SearchPage from "../../common/SearchPage";
import NoResultPage from "../../common/noResult";
import ErrorPage from "../../common/Error";
import useDebounce from "../../hooks/useDebounce";
import {
  DEFAULT_DEBOUNCE_TIME,
  SEARCH_RESULTS_TITLE,
} from "../../common/globalVariables";
import { movieGenres_ids } from "../../common/fetchMoviesGenres";

import { fetchOptions } from "../../common/globalVariables";
import useFetchMovies from "../../hooks/useFetchMovies";

const DEFAULT_PAGE_STATE = "movies";

const MovieListPage = () => {
  const [moviesData, setMoviesData] = useState(null);
  const [isFirstEffect, setIsFirstEffect] = useState(true);
  const [Genres, setGenres] = useState({});
  const [totalResults, setTotalResults] = useState(null);

  const movieState = useSelector(selectSettingMovieStateValue);
  const moviePageNr = useSelector(selectSettingMoviePageNrValue);
  const pageState = useSelector(selectSettingPageStateValue);
  const searchPageNr = useSelector(selectSettingSearchPageNrValue);
  const loadingState = useSelector(selectSettingLoadingValue);
  const searchState = useSelector(selectSettingSearchValue);
  const dispatch = useDispatch();

  const location = useLocation();
  const history = useHistory();
  const myQuery = new URLSearchParams(location.search).get(
    searchQueryParamName
  );
  const debouncedQuery = useDebounce(myQuery, DEFAULT_DEBOUNCE_TIME);

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

 

  useFetchMovies(
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
  );

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
          <ContentHeader>
            {!searchState || myQuery === null
              ? "Poular Movies"
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
