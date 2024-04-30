import { styled } from "styled-components";

export const MessageParagraph = styled.h1`
  height: auto;
  font-weight: 600;
  font-size: 36px;
  line-height: 43.2px;
  color: ${({ theme }) => theme.color.Black};
  margin: 56px auto 0 276px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    margin: 56px auto;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 30px;
    margin: 40px auto;

  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    font-size: 24px;
    padding: 20px;
    margin: 20px auto;

  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 18px;
    padding: 20px;
  }
`;
