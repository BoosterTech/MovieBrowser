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
  IconStar,
} from "./styled";

import { ReactComponent as Star } from "./star.svg";

export const MovieTile = ({ image, title, year, category, rate, vote }) => {
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
        <RatingWrapper>
          <IconStar as={Star} />
          <RateContainer>{rate.toFixed(1)}</RateContainer>
          <VoteContainer>
            {vote} {vote > 1 ? "votes" : "vote"}
          </VoteContainer>
        </RatingWrapper>
      </DescriptionContainer>
    </Wrapper>
  );
};

export default MovieTile;
