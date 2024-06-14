import styled from "styled-components";

export const TilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 22px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopMini}) {
    grid-template-columns: repeat(5, 1fr);
    margin: 0px auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1000px;
    display: grid;
    justify-content: center;
    margin: 10px 84px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMediumMin}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobilePeopleMedium}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    margin: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileUltraMin}) {
    grid-template-columns: 1fr;
  }
`;