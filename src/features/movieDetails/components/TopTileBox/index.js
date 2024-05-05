import { ReactComponent as Star } from "./../../../../assets/images/star.svg";
import {
  PosterContainer,
  GradientCover,
  Vignette,
  Poster,
  TitleWrapper,
  Title,
  RatingWrapper,
  IconStar,
  RateContainer,
  VoteContainer,
  ScoreLimit,
} from "./styled";

export const TopTileBox = ({ imageSrc, title, rate, vote }) => (
  <PosterContainer>
    <Poster
      $background={imageSrc}
      alt={title} >
    <GradientCover />
    <Vignette />
    <TitleWrapper>
      <Title>{title}</Title>
      <RatingWrapper>
        <IconStar as={Star} />
        <RateContainer>
          {rate
            .toFixed(1)
            .toString()
            .replace(".", ",")
          }
        </RateContainer>
        <ScoreLimit>/ 10</ScoreLimit>
        <VoteContainer>
          {vote} {vote > 1 ? "votes" : "vote"}
        </VoteContainer>
      </RatingWrapper>
    </TitleWrapper>
    </Poster>
  </PosterContainer>
);
