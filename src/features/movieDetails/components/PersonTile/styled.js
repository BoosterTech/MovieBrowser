import styled from "styled-components";
import { showin } from "../../../personList/styled";

export const TileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 176px;
  min-height: 360px;
  padding: 16px;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.Black};
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.Heather};
  animation: ${showin} 1s ease;
  transition: all 0.5s ease;

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.75); // 50% darker on hover
    cursor: pointer;
    transition: 0.3s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopMini}px) {
    margin: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    min-height: 270px;
    padding: 0px;
    width: 150px;
    padding-top: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    width: 136px;
    padding: 0px;
  }
`;

export const TileImage = styled.img`
  max-width: 176px;
  max-height: 231px;
  border-radius: 5px;
  object-fit: cover;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 120px;
    max-height: 178px;
    margin: 8px;
  }
`;

export const PersonName = styled.div`
  margin: 12px 0 8px 0;
  text-align: center;
  font-weight: 500;
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    line-height: 18.2px;
    max-width: 120px;
    margin-top: 0px;
  }
`;

export const PersonCharacter = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.color.StormGray};
  margin-bottom: 16px;
  text-align: center;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;
