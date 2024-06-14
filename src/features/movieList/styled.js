import styled from "styled-components";
import { showin } from "../../common/componentsDisplayAnimation";

export const ContentWrapper = styled.section`
  max-width: 1368px;
  min-height: 750px;
  color: ${({ theme }) => theme.color.Black};
  padding: 0;
  margin: 56px auto 40px auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopMini}) {
    max-width: 1000px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    max-width: 660px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 20px 70px 40px 70px;
    max-width: 670px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}) {
    max-width: 320px;
    margin: 24px auto 40px auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    margin: 24px auto 40px auto;
  }
`;

export const ContentHeader = styled.h1`
  width: auto;
  height: auto;
  font-size: 36px;
  font-weight: 600;
  text-align: left;
  color: ${({ theme }) => theme.color.Woodsmoke};
  margin: 0;
  margin-bottom: 24px;
  padding: 0;
  animation: ${showin} 1s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 18px;
    margin-bottom: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    font-size: 18px;
    margin-left: 16px;
  }
`;

export const TilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopMini}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1000px;
    display: grid;
    justify-content: center;
    margin: 10px 84px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    grid-template-columns: repeat(2, 1fr);
    display: grid;
    justify-content: center;
    margin: 10px 84px;
    
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}) {
    grid-template-columns: 1fr;
    display: grid;
    justify-content: center;
    margin: 10px 84px;
  }
`;
