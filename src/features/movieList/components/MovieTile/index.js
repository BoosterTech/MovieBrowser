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

import { ReactComponent as Star } from "./star.svg";
import ImageDefault from "../ImageDefault";

export const MovieTile = ({ imageSrc, title, year, category, rate, vote }) => {
  return (
    <Wrapper>
      {imageSrc ? (
        <TileImage src={imageSrc} alt="TileImage" />
      ) : (
        <ImageDefault />
      )}
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
        <RateContainer>{rate.toFixed(1)}</RateContainer>
        <VoteContainer>
          {vote} {vote > 1 ? "votes" : "vote"}
        </VoteContainer>
      </RatingWrapper>
    </Wrapper>
  );
};

export default MovieTile;
