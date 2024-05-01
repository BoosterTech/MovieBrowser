import { styled } from "styled-components";

export const StyledSvg = styled.svg`
  display: block;
  max-width: 668px;
  max-height: 509px;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 500px;
    max-height: 350px;
  }
`;
