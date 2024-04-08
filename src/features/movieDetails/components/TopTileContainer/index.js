import { ReactComponent as Star } from "./../../../../assets/images/star.svg";
import { ReactComponent as Poster } from "./../../../../assets/images/Poster_big.svg";
import { ReactComponent as Pleksa } from "./../../../../assets/images/Pleksa.svg";
import {
    Wrapper,
    ShadowContainer,
    IconPoster,
    Title,
    RatingWrapper,
    IconStar,
    RateContainer,
    VoteContainer,
    ScoreLimit,
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
                    <IconStar as={Star} />
                    <RateContainer>{rate.toFixed(1)}</RateContainer>
                    <ScoreLimit>/10</ScoreLimit>
                </RatingWrapper>
                <VoteContainer>
                    {vote} {vote > 1 ? "votes" : "vote"}
                </VoteContainer>
            </ShadowContainer>
        </Wrapper>
    )
}

