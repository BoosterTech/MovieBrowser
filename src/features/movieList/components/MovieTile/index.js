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

export const MovieTile = ({
  imageSrc,
  title = "Mulan",
  year = "Director (2020)",
  category = ["action", "fantasy", " thiller"],
  rate = 7.8,
  vote = 3876,
  noHover = false,
}) => {
  return (
    <MovieTileWrapper noHover={noHover}>
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
