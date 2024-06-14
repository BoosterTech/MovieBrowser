import { styled } from "styled-components";
import { showin } from "../componentsDisplayAnimation";

export const MessageParagraph = styled.h1`
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
