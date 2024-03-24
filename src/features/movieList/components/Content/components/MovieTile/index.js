import {
  CategoryTag,
  CategoryTagWrapper,
  DescriptionContainer,
  MovieTitle,
  MovieYear,
  RateContainer,
  RatingWrapper,
  TileImage,
  VoteContainer,
  Wrapper,
} from "./styled";

import defaultPosterImage from "./testPoster.png";
import { ReactComponent as Star } from "./star.svg";

export const MovieTile = ({
  image = defaultPosterImage,
  title = "Mulan",
  year = "2020",
  category = ["Action", "Adventure", "Drama"],
  rate = "7,8",
  vote = 35,
}) => {
  return (
    <Wrapper>
      <TileImage src={image} alt="TileImage" />
      <DescriptionContainer>
        <MovieTitle>{title}</MovieTitle>
        <MovieYear>{year}</MovieYear>
        <CategoryTagWrapper>
          {category.map((item, index) => (
            <CategoryTag key={index}>{item}</CategoryTag>
          ))}
        </CategoryTagWrapper>
      </DescriptionContainer>
      <RatingWrapper>
        <Star />
        <RateContainer>{rate}</RateContainer>
        <VoteContainer>
          {vote} {vote > 1 ? "votes" : "vote"}
        </VoteContainer>
      </RatingWrapper>
    </Wrapper>
  );
};

export default MovieTile;
