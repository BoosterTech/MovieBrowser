import { ReactComponent as Star } from "./../../../../assets/images/star.svg";
import { ReactComponent as Poster } from "./../../../../assets/images/Poster_big.svg";
// import { ReactComponent as Pleksa } from "./../../../../assets/images/Pleksa.svg";
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
    ShadowContainer,
} from "./styled";

export const TopTileContainer = ({

    title = "Mulan long title",
    rate = 7.8,
    vote = 3876,
}) => {
    return (
        <Wrapper>
            <ShadowContainer>
                <IconPoster as={Poster} />
                <Title>{title}</Title>
                <RatingWrapper>
                    <ScoreWrapper>
                        <IconStar as={Star} />
                        <RateContainer>{rate.toFixed(1)}</RateContainer>
                        <ScoreLimit>/10</ScoreLimit>
                    </ScoreWrapper>
                    <VoteContainer>
                        {vote} {vote > 1 ? "votes" : "vote"}
                    </VoteContainer>
                </RatingWrapper>
            </ShadowContainer>
        </Wrapper>
    )
};