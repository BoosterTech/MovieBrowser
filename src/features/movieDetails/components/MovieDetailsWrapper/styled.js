import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1368px;
  max-height: 544px;
  margin: 64px auto;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 16px auto;
}
`;

export const Tile = styled.article`
    background: ${({ theme }) => theme.color.White};
    padding: 40px;
    box-shadow: 0px 4px 12px ${({ theme }) => theme.color.Heather};
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas:
    "image data"
    "image data"
    "image tekst";
    grid-gap: 40px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
        grid-template-columns: auto; 
        grid-template-areas:
        "image data"
        "tekst tekst"
        "tekst tekst";
        grid-gap: 20px;
    }
`;

export const Image = styled.img`
    width: 312px;
    height: 464px;
    border-radius: 5px;
    grid-area: image;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 200px;
        height: 352px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        width: 114px;
        height: 169px;
    }
`;

export const Content = styled.div`
    padding: 8px 0;
    grid-area: data;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
        margin-right: 22px;
    }
`;

export const Title = styled.div`
    font-weight: 600px;
    font-size: 36px;
    margin-bottom: 24px;
    font-weight: 600;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 24px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        font-size: 16px;
    }
`;

export const Year = styled.div`
    font-size: 22px;
    font-weight: 400;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        font-size: 13px;
    }
`;

export const NameBlock = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr;
    margin: 24px 0;
    grid-gap: 10px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        font-size: 12px;
    }
`;

export const GreyName = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.color.StormGray};
    margin: 0;
    font-weight: 400;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 10px;
  }
`;

export const YearBlock = styled.p`
    font-size: 18px;
    margin: 0;
    font-weight: 400;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
  }
`;

export const DescriptionName = styled.p`
    font-size: 18px;
    margin: -16px;
    font-weight: 400;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 10px;
  }
`;

export const Tags = styled.div`
    list-style: none;
    display:flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin: 24px -8px;
`;

export const Tag = styled.div`
    background: ${({ theme }) => theme.color.Mystic};
    padding: 8px 16px;
    font-size: 14px;
    margin: 8px;
    border-radius: 5px;
    font-weight: 400;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 10px;
  }
`;

export const VotesBlock = styled.div`   
    display: grid;
    grid-template-columns: 32px 40px 30px 80px;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 32px 30px 30px 80px;
  }
`;

export const ImageSvg = styled.img`
    width: 24px;
    height: 22.87px;
`;

export const VotesBlockScore = styled.div`
    font-weight: 500;
    font-size: 22px;
    margin-top: 1px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
  }
`;

export const VotesBlockRest = styled.div`
    font-weight: 400;
    font-size: 14px;
    height: 10px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 10px;
        margin-top: 5px;
  }
`;

export const Description = styled.div`
    font-size: 20px;
    line-height: 1.6;
    font-weight: 400;
    grid-area: tekst;


    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        font-size: 14px;
  }
`;