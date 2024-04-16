import { ReactComponent as Star } from "./../../../../assets/images/star.svg";
// import { ReactComponent as Poster } from "./../../../../assets/images/Poster_big.svg";
import {
    Wrapper,
    ScoreWrapper,
    IconPoster,
    Title,
    RatingWrapper,
    IconStar,
    RateContainer,
    VoteContainer,
    ScoreLimit,
    // ShadowContainer,
} from "./styled";

export const TopTileContainer = ({

    imageSrc,
    title,
    rate,
    vote,
}) => {
    return (
        <Wrapper>
            {/* <ShadowContainer> */}
            {imageSrc ? <IconPoster src={imageSrc} alt=""/>: null}
                <Title>{title}</Title>
                <RatingWrapper>
                    <ScoreWrapper>
                        <IconStar as={Star} />
                        <RateContainer>{rate.toFixed(1)}</RateContainer>
                        <ScoreLimit>/ 10</ScoreLimit>
                    </ScoreWrapper>
                    <VoteContainer>
                        {vote} {vote > 1 ? "votes" : "vote"}
                    </VoteContainer>
                </RatingWrapper>
            {/* </ShadowContainer> */}
        </Wrapper>
    )
};