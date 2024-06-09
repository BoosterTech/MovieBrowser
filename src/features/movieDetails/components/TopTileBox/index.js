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
  WatchTrailerButton,
  CloseTrailerButton,
} from "./styled";

export const TopTileBox = ({ imageSrc, title, rate, vote, trailerKey }) => {
  const [trailerOpen, setTrailerOpen] = useState(false);

  const handleTrailerOpen = () => {
    trailerOpen ? setTrailerOpen(false) : setTrailerOpen(true);
  };

  const handleTrailerClose = () => {
    setTrailerOpen(false);
  };

  return (
    <PosterContainer>
      <Poster $background={imageSrc} alt={title}>
        <GradientCover />
        <Vignette />
        <CloseTrailerButton onClick={handleTrailerClose} $display={trailerOpen}>
          ❌{" "}
        </CloseTrailerButton>
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
            <WatchTrailerButton
              onClick={handleTrailerOpen}
              $position={trailerOpen}
            >
              Watch Trailer
            </WatchTrailerButton>
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
