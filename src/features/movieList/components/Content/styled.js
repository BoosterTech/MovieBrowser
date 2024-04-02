import styled, { keyframes } from "styled-components";

export const showin = keyframes`
  0% {
   opacity:0;
  }
  100% {
    opacity:1;
  }
`;

export const ContentWrapper = styled.section`
  max-width: 1368px;
  max-height: auto;
  top: 150px;
  left: 276px;
  color: ${({ theme }) => theme.color.Woodsmoke};
  padding: 0;
  margin: 56px auto 40px auto;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
      margin: 15px ;
    }
`;

export const ContentHeader = styled.h1`
  max-width: 285px;
  max-height: 43px;
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  text-align: left;
  color: ${({ theme }) => theme.color.Woodsmoke};
  margin: 0;
  padding: 0;
  animation: ${showin} 1s ease;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    margin: 20px 15px;
    }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
    }
`;

export const TilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  height: auto;
  max-width: 368px;
  margin: 24px 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    max-width: 1198px;
    margin: 15px;
    grid-gap: 24px 16px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: repeat(2, 1fr);
    display: grid;
    justify-content: center;
    margin: 10px 84px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    display: grid;
    justify-content: center;
    margin: 10px 84px;
  }
`;
