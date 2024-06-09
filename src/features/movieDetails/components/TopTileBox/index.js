import { useState } from "react";
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
  TrailerPlayer,
  TrailerButton,
} from "./styled";

export const TopTileBox = ({ imageSrc, title, rate, vote, trailerKey }) => {
  const [trailerOpen, setTrailerOpen] = useState(false);

  const handleTrailerPlay = () => {
    trailerOpen ? setTrailerOpen(false) : setTrailerOpen(true);
  };

  return (
    <PosterContainer>
      <Poster $background={imageSrc} alt={title}>
        <GradientCover />
        <Vignette />
        <TrailerButton onClick={handleTrailerPlay} $display={trailerOpen}>
          {trailerOpen ? "❌" : "Watch Trailer "}
        </TrailerButton>
        {trailerOpen ? (
          <TrailerPlayer
            $show={trailerOpen}
            url={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
            playing={true}
            controls={true}
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ) : (
          <TitleWrapper>
            <Title>{title}</Title>
            <RatingWrapper>
              <IconStar as={Star} />
              <RateContainer>
                {rate.toFixed(1).toString().replace(".", ",")}
              </RateContainer>
              <ScoreLimit>/ 10</ScoreLimit>
              <VoteContainer>
                {vote} {vote > 1 ? "votes" : "vote"}
              </VoteContainer>
            </RatingWrapper>
          </TitleWrapper>
        )}
      </Poster>
    </PosterContainer>
  );
};
