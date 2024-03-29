import { ContentHeader, ContentWrapper, TilesContainer } from "./styled";
import { LoadingSpinner } from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMovieStateValue,
  updateState,
} from "../../../../Redux_store/moviesSlice";
import MovieTile from "./components/MovieTile";
import { apiMoviePopular } from "../../../../common/API_URL";
import { useEffect, useState } from "react";

export const Content = () => {
  const [moviesData, setMoviesData] = useState(null);
  const state = useSelector(selectMovieStateValue);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${apiMoviePopular}1`, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjI2MDE5NmJjOWJiYjBkZjdiZDc0N2NmMDEzNTdjMCIsInN1YiI6IjY2MDAwZmZjNjJmMzM1MDE2NDUxNWJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5BdMVijb7g_8sAaxu9WLzzFLGen6qB1lNYLha-96Tw",
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { results } = await response.json();
        setMoviesData(results);

        dispatch(updateState("success"));
      } catch (error) {
        dispatch(updateState("error"));
        console.error("Error fetching movies:", error);
      }
    };
    const timeOutId = setTimeout(fetchMovies, 1500);
    return () => clearTimeout(timeOutId);
  }, [dispatch]);

  console.log(moviesData);

  return (
    <ContentWrapper>
      <ContentHeader>Popular Movies</ContentHeader>
      <TilesContainer>
        {state === "loading" ? (
          <LoadingSpinner />
        ) : (
          moviesData &&
          moviesData.map((movie) => (
            <MovieTile
              key={movie.id}
              title={movie.title}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              year={movie.release_date.substring(0, 4)}
              rate={movie.vote_average}
              vote={movie.vote_count}
            />
          ))
        )}
      </TilesContainer>
    </ContentWrapper>
  );
};
