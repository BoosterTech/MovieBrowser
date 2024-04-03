import { Navigation } from "../../common/Navigation"


export const MovieDetailsPage = () => ({

    title = "Mulan",
    year = "2020",
    category = ["action", "fantasy", " thiller"],
    rate = 7.8,
    vote = 3876,
    place = "China, United States of America",
    date = "24.10.2020",
    namePerson = "Liu Yifei",

}) => {
    return (
        <Wrapper>
            <Navigation />
            <PosterContainer>
                <Poster />
                <Title />
                <RatingPoster>
                    <StarPoster />
                    <RatePoster>{rate.toFixed(1)}</RatePoster>
                    <VotePoster>
                        {vote} {vote > 1 ? "votes" : "vote"}
                    </VotePoster>
                </RatingPoster>
            </PosterContainer>
            <Content>
                <MovieTile>
                    <Poster />
                    <MovieData>
                        <MovieTitle>{title}</MovieTitle>
                        <MovieYear>{year}</MovieYear>
                        <ProductionData>
                            <ProductionPlace>
                                <Name>Production</Name>
                                <Place>{place}</Place>
                            </ProductionPlace>
                            <ReleaseData>
                                <Name>ReleaseData</Name>
                                <Date>{date}</Date>
                            </ReleaseData>
                        </ProductionData>
                        <CategoryTagWrapper>
                            <CategoryTag>{category}</CategoryTag>
                        </CategoryTagWrapper>
                        <RatingWrapper>
                            <Star />
                            <RateContainer>{rate.toFixed(1)}</RateContainer>
                            <VoteContainer>
                                {vote} {vote > 1 ? "votes" : "vote"}
                            </VoteContainer>
                        </RatingWrapper>
                        <Description>
                            A young Chinese maiden disguises herself as a male warrior in order to save her father.
                            Disguises herself as a male warrior in order to save her father.  A young Chinese maiden
                            disguises herself as a male warrior in order to save her father.
                        </Description>
                        <Cast>
                            <Header />
                            <CastContent>
                                <Tile>
                                    <PicturePerson />
                                    <NamePerson>{namePerson}</NamePerson>
                                    <TitleMoviePerson>{title}</TitleMoviePerson>
                                </Tile>
                            </CastContent>
                        </Cast>
                        <Crew>
                            <Header />
                            <CrewContent>
                                <Tile>
                                    <PicturePerson />
                                    <NamePerson>{namePerson}</NamePerson>
                                    <TitleMoviePerson>{title}</TitleMoviePerson>
                                </Tile>
                            </CrewContent>
                        </Crew>
                    </MovieData>
                </MovieTile>
            </Content>
        </Wrapper>
    );
};