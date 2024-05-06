import { useEffect, useState } from "react";
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
import ImageDefaultMovie from "../../../../common/ImageDefaultMovie";

export const MovieDetailsWrapper = ({
  imageSrc,
  title,
  yearShort,
  production,
  shortProduction,
  yearFull,
  categories,
  rate,
  vote,
  description,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <Tile>
        {imageSrc ? <Image src={imageSrc} alt="" /> : <ImageDefaultMovie />}
        <Content>
          <Title>{title}</Title>
          <Year>{yearShort}</Year>
          <NameBlock>
            {windowWidth >= 390 ? (
              <>
                <GreyName>Production:</GreyName>
                <DescriptionName>{production}</DescriptionName>
              </>
            ) : (
              <DescriptionName>{shortProduction}</DescriptionName>
            )}
            {windowWidth >= 390 ? (
              <>
                <GreyName>Release date:</GreyName>
              </>
            ) : (
              ""
            )}
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
            {windowWidth >= 390 ? (
              <>
                <VotesBlockRest>/ 10</VotesBlockRest>
              </>
            ) : (
              ""
            )}
            <VotesBlockRest>{vote}</VotesBlockRest>
            <VotesBlockRest>votes</VotesBlockRest>
          </VotesBlock>
        </Content>
        <Description>{description}</Description>
      </Tile>
    </Wrapper>
  );
};
