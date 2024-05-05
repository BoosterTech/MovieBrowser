import styled from "styled-components";

export const TilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 22px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopMini}px) {
    grid-template-columns: repeat(5, 1fr);
    margin: 0px auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1000px;
    display: grid;
    justify-content: center;
    margin: 10px 84px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobilePeopleMedium}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin: 0px;
  }
`;