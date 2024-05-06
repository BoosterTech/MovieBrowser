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

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopMini}px) {
    margin: 20px auto;
    max-width: 1200px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    margin: 20px auto;
    max-width: 920px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin: 20px auto;
    max-width: 770px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 20px auto;
    max-width: 670px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    margin: 24px auto 40px auto;
    max-width: 450px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobilePeopleMedium}px) {
    max-width: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin: 24px auto 40px auto;
    max-width: 300px;
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
    margin-left: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    margin-left: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
    margin-bottom: 12px;
    margin-left: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 18px;
    margin-left: 16px;
  }
`;

export const TilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
  height: auto;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopMini}px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobilePeopleMedium}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
