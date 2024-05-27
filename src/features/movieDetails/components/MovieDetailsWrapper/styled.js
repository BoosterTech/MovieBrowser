import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1368px;
  height: auto;
  margin: 64px auto 0 auto;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 16px auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    max-width: 288px;
  }
`;

export const Tile = styled.article`
  background: ${({ theme }) => theme.color.White};
  padding: 40px;
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.Heather};
  display: grid;
  grid-template-columns: 312px 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "image data"
    "image tekst";
  grid-gap: 20px 40px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        padding-bottom: 25px;
    }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 250px auto;
    grid-template-areas:
      "image data  "
      "image data  "
      "tekst tekst  ";
    grid-gap: 10px;
    padding: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMediumMin}px) {
    padding: 10px;
    grid-template-columns: 190px auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    grid-gap: 16px;
    padding: 16px;
    grid-template-columns: auto auto;
    grid-template-areas:
      "image data "
      "tekst tekst "
      "tekst tekst ";
  }
`;

export const Image = styled.img`
  width: 312px;
  height: 464px;
  border-radius: 5px;
  grid-area: image;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 230px;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMediumMin}px) {
    width: 170px;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    width: 114px;
    height: 169px;
  }
`;

export const Content = styled.div`
  padding: 8px 0;
  grid-area: data;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-right: 0px;
    min-width: 120px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin-right: 0px;
    width: 126px;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 24px;
    margin-bottom: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

export const Year = styled.div`
  font-size: 22px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 13px;
    color: ${({ theme }) => theme.color.Waterloo};
    margin-bottom: 8px;
  }
`;

export const NameBlock = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  margin: 24px 0;
  grid-gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    grid-template-columns: 1fr;
    margin: 0;
    grid-gap: 0px;
  }
`;

export const GreyName = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.color.StormGray};
  margin: 0;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobilePeopleMedium}px) {
        font-size: 12px;
  }
`;

export const YearBlock = styled.p`
  font-size: 18px;
  margin: 0;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobilePeopleMedium}px) {
        font-size: 13px;
  }
`;

export const DescriptionName = styled.p`
    font-size: 18px;
    margin-left: -16px;
    font-weight: 400;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
        margin-left: 0px;
    }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 12px;
    margin-top: -2px;
    margin-bottom: 8px;
  }
`;

export const Tags = styled.div`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin: 24px -8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 12px -8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin: 8px 0 12px -4px;
  }
`;

export const Tag = styled.div`
  background: ${({ theme }) => theme.color.Mystic};
  padding: 8px 16px;
  font-size: 14px;
  margin: 8px;
  border-radius: 5px;
  font-weight: 400;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 12px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        font-size: 10px;
        padding: 4px 8px;
        margin: 4px;
    }
`;

export const VotesBlock = styled.div`   
    display: grid;
    grid-template-columns: 32px 34px 30px 34px 20px;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 32px 26px 30px 36px 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    grid-template-columns: 20px 26px 30px 36px;
    font-size: 10px;
  }
`;

export const ImageSvg = styled.img`
  width: 24px;
  height: 22.87px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    width: 16px;
    height: 15.25px;
  }
`;

export const VotesBlockScore = styled.div`
  font-weight: 500;
  font-size: 22px;
  margin-top: 2px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    margin-top: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 13px;
    font-weight: 600;
    margin-top: 4px;
  }
`;

export const VotesBlockRest = styled.div`
  font-weight: 400;
  font-size: 14px;
  height: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 13px;
    margin-top: 0px;
    color: ${({ theme }) => theme.color.DarkerGray};
  }
`;

export const Description = styled.div`
  font-size: 20px;
  line-height: 1.6;
  font-weight: 400;
  grid-area: tekst;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    font-size: 16px;
  }

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        font-size: 14px;
        margin-top: -20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 0px;
    }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileUltraMin}px) {
    font-size: 10px;
  }
`;
