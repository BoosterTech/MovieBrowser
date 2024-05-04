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
  IconStar,
} from "./styled";

import { ReactComponent as Star } from "./../../../../assets/images/star.svg";
import ImageDefaultMovie from "../../../../common/ImageDefaultMovie";

const MovieTile = ({ imageSrc, title, year, category, rate, vote }) => {
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

        <RatingWrapper>
          <IconStar as={Star} />
          <RateContainer>{rate.toFixed(1).replace(".", ",")}</RateContainer>
          <VoteContainer>
            {vote} {vote > 1 ? "votes" : "vote"}
          </VoteContainer>
        </RatingWrapper>
      </DescriptionContainer>
    </MovieTileWrapper>
  );
};

export default MovieTile;
