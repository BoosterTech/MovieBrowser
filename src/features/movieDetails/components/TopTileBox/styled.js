import styled from "styled-components";

export const PosterContainer = styled.div`
  max-height: 770px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.Black};
  position: relative;
  z-index: -3;
  `;

export const ImageWrapper = styled.div`
  max-width: 1356px;
  max-height: 770px;
  position: relative;
  margin: 0 auto;
`;

export const StyledPoster = styled.div`
  max-width: 1356px;
  max-height: 770px;
  box-shadow: inset 0 0 100px 90px rgba(0, 0, 0);
  z-index: -1;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopMini}) {
    box-shadow: inset 0 0 100px 80px rgba(0, 0, 0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}) {
    box-shadow: inset 0 0 92px 70px rgba(0, 0, 0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    box-shadow: inset 0 0 84px 60px rgba(0, 0, 0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    box-shadow: inset 0 0 67px 50px rgba(0, 0, 0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobilePeopleMedium}) {
    box-shadow: inset 0 0 44px 33px rgba(0, 0, 0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    box-shadow: inset 0 0 39px 25px rgba(0, 0, 0);
  }
`;

export const Poster = styled.img`
  max-width: 1356px;
  max-height: 770px;
  position: relative;
  z-index: -2;
`;

export const TitleWrapper = styled.div`
  color: ${({ theme }) => theme.color.White};
  bottom: 0px;
  left: 0px;
  z-index: 3;
  position: absolute;
  text-align: left;
  padding: 0 16px;
  padding-bottom: 56px;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 64px;
`;

export const RatingWrapper = styled.div`
  max-width: 130px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;
  margin-bottom: 0;
  gap: 8px;
`;

export const IconStar = styled.div`
  width: 40px;
  height: 38.12px;
`;

export const RateContainer = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin: 0;
`;

export const VoteContainer = styled.div`
  margin-top: 4px;
  margin-bottom: 0;
`;

export const ScoreLimit = styled.div`
`;