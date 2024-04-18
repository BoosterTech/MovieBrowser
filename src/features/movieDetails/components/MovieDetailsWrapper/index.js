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
    DescriptionName,
    Tags,
    Tag,
    VotesBlock,
    ImageSvg,
    VotesBlockScore,
    VotesBlockRest,
    Description,
    YearBlock,
} from "./styled";

export const MovieDetailsWrapper = ({

    imageSrc,
    title,
    yearShort,
    production,
    yearFull,
    categories,
    rate,
    vote,
    description,

}) => {
    return (
        <Wrapper>
            <Tile>
                {imageSrc ? <Image src={imageSrc} alt="" /> : null}
                <Content>
                    <Title>{title}</Title>
                    <Year>{yearShort}</Year>
                    <NameBlock>
                        <GreyName>Production:</GreyName>
                        <DescriptionName>
                            {production}
                        </DescriptionName>
                        <GreyName>Release date:</GreyName>
                        <YearBlock>{yearFull}</YearBlock>
                    </NameBlock>
                    <Tags>
                        {categories.map((category, index) => (
                            <Tag key={index}>{category}</Tag>
                        ))}
                    </Tags>
                    <VotesBlock>
                        <ImageSvg src={star} />
                        <VotesBlockScore>{rate.toFixed(1)}</VotesBlockScore>
                        <VotesBlockRest>/ 10</VotesBlockRest>
                        <VotesBlockRest>{vote} votes</VotesBlockRest>
                    </VotesBlock>
                    <Description>
                        {description}
                    </Description>
                </Content>
            </Tile>
        </Wrapper>
    )
};