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
} from "../../Redux_store/settingSlice";
import { toMovieDetails } from "../../routes";
import { NavLink, useHistory, useLocation } from "react-router-dom";

export const MovieListPage = () => {
  const [moviesData, setMoviesData] = useState(null);
  const [isFirstEffect, setIsFirstEffect] = useState(true);
  const pageNr = useSelector(selectSettingMoviePageNrValue);
  const loadingState = useSelector(selectSettingLoadingValue);
  const pageState = useSelector(selectSettingPageStateValue);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = params.get("page");
    const path = location.pathname;

    dispatch(setLoadingState("loading"));
    dispatch(setPageState("movies"));

    if (page && path.includes("/movies")) dispatch(setPageNr(Number(page)));

    sessionStorage.setItem("pageState", "movies");
    sessionStorage.setItem("moviesPageNr", pageNr);

    setIsFirstEffect(false);
  }, [pageNr, dispatch]);

  useEffect(() => {
    const newPath = `?page=${pageNr}`;

    if (location.search !== newPath && !isFirstEffect) history.push(newPath);
  }, [pageNr, location.search, isFirstEffect]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const responseMovies = await fetch(`${apiMoviePopularURL}${pageNr}`, {
          headers: {
            Authorization: APIAuthorization,
            Accept: "application/json",
          },
        });

        if (!responseMovies.ok) {
          throw new Error(responseMovies.statusText());
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
  }, [pageNr, dispatch]);

  return loadingState === "loading" ? (
    <LoadingSpinner />
  ) : (
    pageState === "movies" && (
      <ContentWrapper>
        <ContentHeader>Popular Movies</ContentHeader>
        <TilesContainer>
          {moviesData &&
            moviesData.map((movie) => {
              const movieGenres = movie.genre_ids.map(
                (id) => moviesGenres_ids[id]
              );
              return (
                <NavLink
                  to={toMovieDetails({ id: movie.id })} // Assuming toMovieDetails expects an ID parameter
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
    )
  );
};
