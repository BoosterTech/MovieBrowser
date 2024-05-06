import { styled } from "styled-components";
import { showin } from "../showin_animation";

export const ErrorMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 595px;
  max-height: 201px;
  padding: 0;
  margin: 24px auto auto auto;
  animation: ${showin} 1s ease;
`;

export const MessageHeader = styled.h1`
  max-height: 44px;
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  text-align: left;
  margin: 0 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    font-size: 30px;
    text-align: center;
    margin: 48px 16px 48px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 24px;
    text-align: center;
    margin: 24px 16px 48px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileUltraMin}px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const MessageInfo = styled.h2`
  max-width: 426px;
  height: 58px;
  font-size: 22px;
  font-weight: 500;
  line-height: 28.6px;
  text-align: center;
  margin: 0 auto 24px auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    font-size: 18px;
    text-align: center;
    margin: 0 16px 36px 16px;
  }
`;

export const ErrorButton = styled.button`
  width: 181px;
  height: 51px;
  padding: 16px 24px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.ScienceBlue};
  color: ${({ theme }) => theme.color.White};
  margin: 0 auto;
  border: none;
  transition: filter 0.3s;

  &:hover {
    cursor: pointer;
    filter: brightness(1.09);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    font-size: 18px;
    text-align: center;
    margin: 0 auto 72px auto;
  }
`;
export const ErrorButtonText = styled.p`
  width: 133px;
  width: 133px;
  height: 19px;
  gap: 0px;
  font-family: Open sans;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  text-align: center;
  margin: auto;
`;
