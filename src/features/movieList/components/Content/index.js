import MovieTile from "./components/MovieTile";
import { ContentHeader, ContentWrapper, TilesContainer } from "./styled";
import { useMoviesData } from "./components/useMoviesData";

export const Content = () => {
  const moviesData = useMoviesData();

  return (
    <ContentWrapper>
      <ContentHeader>Popular Movies</ContentHeader>
      <TilesContainer>
        {moviesData.state === "success" &&
          moviesData.data.map((movie) => {
            return (
              <MovieTile
                key={movie.id}
                title={movie.title}
                // image={movie.poster_path}
                year={movie.release_date.substring(0,4)}
                rate={movie.vote_average}
                vote={movie.vote_count}
              />
            );
          })}
      </TilesContainer>
    </ContentWrapper>
  );
};
