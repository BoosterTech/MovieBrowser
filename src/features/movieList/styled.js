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
  min-height: 750px;
  color: ${({ theme }) => theme.color.Black};
  padding: 0;
  margin: 56px auto 40px auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    margin: 15px;
    height: auto;
  }
`;

export const ContentHeader = styled.h1`
  width: auto;
  max-height: 43px;
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  text-align: left;
  color: ${({ theme }) => theme.color.Woodsmoke};
  margin: 0;
  margin-bottom: 24px;
  padding: 0;
  animation: ${showin} 1s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopMini}px) {
    margin: 20px 25px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    margin: 20px 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin: 20px 0 20px 90px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 18px;
  }
`;

export const TilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopMini}px) {
    max-width: 1037px;
    margin: 0px auto;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 1000px;
    display: grid;
    justify-content: center;
    margin: 10px 84px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    display: grid;
    justify-content: center;
    margin: 10px 84px;
  }

  ${(props) =>
    props.persontile &&
    `
  grid-template-columns: repeat(6, 1fr);
  `}
`;
