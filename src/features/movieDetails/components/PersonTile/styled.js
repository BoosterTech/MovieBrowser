import styled from "styled-components";
import { showin } from "../../../personList/styled";

export const TileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 176px;
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
    width: 136px;
    height: 245px;
  }
`;

export const TileImage = styled.img`
  width: 177px;
  max-height: 264px;
  margin-bottom: 12px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 120px;
    height: 178px;
    margin: 8px;
  }
`;

export const PersonName = styled.div`
  margin: 0 0 8px 0;
  text-align: center;
  font-weight: 500;
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    line-height: 18.2px;
    max-width: 120px;
    margin-top: 0px;
    padding-top: 0px;
  }
`;

export const PersonCharacter = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.color.StormGray};
  margin-bottom: 16px;
  text-align: center;
  font-weight: 400;
`;
