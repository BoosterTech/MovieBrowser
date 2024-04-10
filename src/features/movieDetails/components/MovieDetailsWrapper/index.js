import poster from "../../../../assets/images/poster.svg";
import star from "../../../../assets/images/star.svg";



import {
    Wrapper,
    Tile,
    Image,
    Content,
    Title,
    Year,
    NameBlock,
    GreyName,
    DescriptionNamePro,
    DescriptionName,
    Tags,
    Tag,
    VotesBlock,
    ImageSvg,
    VotesBlockScore,
    VotesBlockRest,
    Description,
} from "./styled";

export const MovieDetailsWrapper = ({

    title = "Mulan long title",
    rate = 7.8,
    vote = 3876,
}) => {
    return (
        <Wrapper>
            <Tile>
                <Image src={poster} alt="" />
                <Content>
                    <Title>Mulan</Title>
                    <Year>2020</Year>
                    <NameBlock>
                        <GreyName>Production:</GreyName>
                        <DescriptionNamePro>China, United States of America</DescriptionNamePro>
                        <GreyName>Release date:</GreyName>
                        <DescriptionName>24.10.2020</DescriptionName>
                    </NameBlock>
                    <Tags>
                        <Tag>Action</Tag>
                        <Tag>Adventure</Tag>
                        <Tag>Drama</Tag>
                    </Tags>
                    <VotesBlock>
                        <ImageSvg src={star} />
                        <VotesBlockScore>7,8</VotesBlockScore>
                        <VotesBlockRest>/10</VotesBlockRest>
                        <VotesBlockRest>335 votes</VotesBlockRest>
                    </VotesBlock>
                    <Description>
                        A young Chinese maiden disguises herself as a male warrior in order to save her father.
                        Disguises herself as a male warrior in order to save her father.
                        A young Chinese maiden disguises herself as a male warrior in order to save her father.
                    </Description>
                </Content>
            </Tile>
        </Wrapper>
    )
};