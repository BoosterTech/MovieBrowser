import { ContentHeader, ContentWrapper, TilesContainer } from "./styled";
import { LoadingSpinner } from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMovieStateValue,
  selectMoviesPageNr,
  updateState,
} from "../../../../Redux_store/moviesSlice";
import MovieTile from "./components/MovieTile";
import { apiMoviePopular } from "../../../../assets/API_URL";
import { useEffect, useState } from "react";
import { moviesGenres_ids } from "../../../../assets/moviesGenre_ids";

export const Content = () => {
  const [moviesData, setMoviesData] = useState(null);
  const moviePage = useSelector(selectMoviesPageNr);

  const state = useSelector(selectMovieStateValue);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const responseMovies = await fetch(`${apiMoviePopular}${moviePage}`, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjI2MDE5NmJjOWJiYjBkZjdiZDc0N2NmMDEzNTdjMCIsInN1YiI6IjY2MDAwZmZjNjJmMzM1MDE2NDUxNWJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5BdMVijb7g_8sAaxu9WLzzFLGen6qB1lNYLha-96Tw",
            Accept: "application/json",
          },
        });

        if (!responseMovies.ok) {
          throw new Error(responseMovies.statusText);
        }

        const { results } = await responseMovies.json();
        setMoviesData(results);

        dispatch(updateState("success"));
      } catch (error) {
        dispatch(updateState("error"));
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [dispatch, moviePage]);

  return (
    <ContentWrapper>
      {state === "loading" ? "" : <ContentHeader>Popular Movies</ContentHeader>}
      <TilesContainer>
        {state === "loading" ? (
          <LoadingSpinner />
        ) : (
          moviesData &&
          moviesData.map((movie) => {
            const movieGenres = movie.genre_ids.map(
              (id) => moviesGenres_ids[id]
            );

            return (
              <MovieTile
                key={movie.id}
                title={movie.title}
                image={
                  movie.poster_path ? (
                    `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  ) : (
                    <ImageDefault />
                  )
                }
                category={movieGenres}
                year={movie.release_date.substring(0, 4)}
                rate={movie.vote_average}
                vote={movie.vote_count}
              />
            );
          })
        )}
      </TilesContainer>
    </ContentWrapper>
  );
};
