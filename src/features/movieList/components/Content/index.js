import MovieTile from "./components/MovieTile";
import { ContentHeader, ContentWrapper, TilesContainer } from "./styled";

export const Content = () => {
  return (
    <ContentWrapper>
      <ContentHeader>Popular Movies</ContentHeader>
      <TilesContainer>
        <MovieTile />
      </TilesContainer>
    </ContentWrapper>
  );
};
