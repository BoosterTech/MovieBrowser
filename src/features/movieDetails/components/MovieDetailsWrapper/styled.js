import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1368px;
  height: auto;
  margin: 64px auto 0 auto;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 16px auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    padding-bottom: 25px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: 250px auto;
    grid-template-areas:
      "image data  "
      "image data  "
      "tekst tekst  ";
    grid-gap: 10px;
    padding: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMediumMin}) {
    padding: 10px;
    grid-template-columns: 190px auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
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
  max-width: 312px;
  max-height: 464px;
  border-radius: 5px;
  grid-area: image;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 230px;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMediumMin}) {
    width: 170px;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    width: 114px;
    height: 169px;
  }
`;

export const Content = styled.div`
  padding: 8px 0;
  grid-area: data;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin-right: 0px;
    min-width: 120px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    margin-right: 0px;
    width: 126px;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 24px;
    margin-bottom: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobilePeopleMedium}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

export const Year = styled.div`
  font-size: 22px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobilePeopleMedium}) {
    font-size: 12px;
  }
`;

export const YearBlock = styled.p`
  font-size: 18px;
  margin: 0;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobilePeopleMedium}) {
    font-size: 13px;
  }
`;

export const DescriptionName = styled.p`
  font-size: 18px;
  margin-left: -16px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 14px;
    margin-left: 0px;
  /
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 13px;
   
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 12px -8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    margin: 8px 0 12px -4px;
  }
`;

export const Tag = styled.div`
  background: ${({ theme }) => theme.color.Mystic};
  border: 1px solid lightgrey;
  padding: 8px 16px;
  font-size: 14px;
  margin: 8px;
  border-radius: 5px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    font-size: 10px;
    padding: 4px 8px;
    margin: 4px;
  }
`;

export const VotesBlock = styled.div`
  display: flex;
  gap: 0;
  align-items: center;
  justify-content: flex-start;

  & > :nth-child(2) {
    margin-left: 10px;
  }
  & > :nth-child(3) {
    margin-left: 3px;
  }

  & > :nth-child(4) {
    margin-left: 15px;
  }
  & > :nth-child(5) {
    margin-left: 5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    font-size: 11px;

    & > :nth-child(4) {
      margin-left: 4px;
    }

    & > :nth-child(2) {
      margin-left: 5px;
    }
  }
`;

export const ImageSvg = styled.img`
  max-width: 35px;
  max-height: 35px;
  height: 35px;
  width: auto;
  margin-bottom: 3px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    height: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    height: 20px;
  }
`;

export const VotesBlockScore = styled.div`
  font-weight: 500;
  font-size: 22px;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const VotesBlockRest = styled.div`
  font-weight: 400;
  font-size: 14px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ $const }) =>
    $const &&
    `
    color:gray;
     `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    font-size: 10px;
  }
`;

export const Description = styled.div`
  font-size: 20px;
  line-height: 1.6;
  font-weight: 400;
  grid-area: tekst;
  margin-top: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileUltraMin}) {
    font-size: 10px;
  }
`;
