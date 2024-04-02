import {
  CategoryTag,
  CategoryTagWrapper,
  DescriptionContainer,
  MovieTileWrapper,
  MovieTitle,
  MovieYear,
  RateContainer,
  RatingWrapper,
  TileImage,
  VoteContainer,
} from "./styled";

import { ReactComponent as Star } from "./../../../../assets/images/star.svg";
import ImageDefaultMovie from "../../../../common/ImageDefaultMovie";

export const MovieTile = ({ imageSrc, title, year, category, rate, vote }) => {
  return (
    <MovieTileWrapper>
      {imageSrc ? (
        <TileImage src={imageSrc} alt="TileImage" />
      ) : (
        <ImageDefaultMovie />
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
    </MovieTileWrapper>
  );
};

export default MovieTile;
