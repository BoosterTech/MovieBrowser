import { ContentHeader, ContentWrapper, TilesContainer } from "./styled";
import { LoadingSpinner } from "../../common/Loader";
import { useDispatch, useSelector } from "react-redux";
import MovieTile from "./components/MovieTile";
import { APIAuthorization, apiMoviePopularURL } from "../../common/API_URL";
import { useEffect, useState } from "react";
import { moviesGenres_ids } from "../../common/moviesGenre_ids";
import {
  selectSettingLoadingValue,
  selectSettingPageStateValue,
  selectSettingMoviePageNrValue,
  setLoadingState,
  setPageState,
  setPageNr,
  selectSettingSearchValue,
  selectSettingSearchPageNrValue,
} from "../../Redux_store/settingSlice";
import { toMovieDetails } from "../../routes";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import searchQueryParamName from "../../common/Search/searchQueryParamName";
import SearchPage from "../../common/SearchPage";
import NoResultPage from "../../common/noResult";
import ErrorPage from "../../common/Error";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingState("loading"));
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const MovieListPage = () => {
  const [moviesData, setMoviesData] = useState(null);
  const [isFirstEffect, setIsFirstEffect] = useState(true);
  const pageNr = useSelector(selectSettingMoviePageNrValue);
  const pageState = useSelector(selectSettingPageStateValue);
  const searchPageNr = useSelector(selectSettingSearchPageNrValue);
  const loadingState = useSelector(selectSettingLoadingValue);
  const searchState = useSelector(selectSettingSearchValue);
  const location = useLocation();
  const history = useHistory();
  const myQuery = new URLSearchParams(location.search).get(
    searchQueryParamName
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(location.search).get("page");
    const path = location.pathname;

    dispatch(setLoadingState("loading"));
    if (!searchState) dispatch(setPageState("movies"));

    if (params && path.includes("/movies")) dispatch(setPageNr(Number(params)));

    sessionStorage.setItem("pageState", "movies");
    sessionStorage.setItem("moviesPageNr", pageNr);
    setIsFirstEffect(false);
  }, [pageNr]);

  useEffect(() => {
    const newPath = `?page=${pageNr}`;

    if (location.search !== newPath && !isFirstEffect) history.push(newPath);
  }, [pageNr, isFirstEffect, dispatch]);

  useEffect(() => {
    if (searchState === true && (!moviesData || moviesData.length === 0)) {
      dispatch(setPageState("noResult"));
    }
  }, [searchState, moviesData, dispatch]);

  const debouncedQuery = useDebounce(myQuery, 500);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const responseMovies = await fetch(
          searchState && debouncedQuery !== null
            ? `https://api.themoviedb.org/3/search/movie?query=${myQuery}&include_adult=false&language=en-US&page=${searchPageNr}`
            : `${apiMoviePopularURL}${pageNr}`,
          {
            headers: {
              Authorization: APIAuthorization,
              Accept: "application/json",
            },
          }
        );

        if (!responseMovies.ok) {
          throw new Error("Response not OK");
        }

        const { results } = await responseMovies.json();

        setMoviesData(results);
        dispatch(setLoadingState("success"));
      } catch (error) {
        dispatch(setLoadingState("error"));
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, [pageNr, dispatch, debouncedQuery]);

  if (loadingState === "error") {
    return <ErrorPage />;
  }

  return loadingState === "loading" ? (
    searchState ? (
      SearchPage(myQuery)
    ) : (
      <LoadingSpinner />
    )
  ) : (
    (pageState === "movies" || searchState === true) &&
      (searchState === true && (!moviesData || moviesData.length === 0) ? (
        NoResultPage(debouncedQuery)
      ) : (
        <ContentWrapper>
          <ContentHeader>
            {!searchState || myQuery === null
              ? "Popular Movies"
              : `Search Results for "${myQuery}"`}
          </ContentHeader>
          <TilesContainer>
            {moviesData &&
              moviesData.map((movie) => {
                const movieGenres = movie.genre_ids.map(
                  (id) => moviesGenres_ids[id]
                );
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
