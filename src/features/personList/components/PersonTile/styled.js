import styled from "styled-components";
import { showin } from "../../styled";

export const TileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 339px;
  width: 208px;
  margin: 0 0 0 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.Black};
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.Heather};
  animation: ${showin} 1s ease;
  transition: all 0.5s ease;
  padding: 0;

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.75); // 50% darker on hover
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopMini}) {
    margin: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 136px;
    height: 245px;
  }
`;

export const TileImage = styled.img`
  width: 176px;
  height: 231px;
  margin-top: 16px;
  margin-bottom: 0;
  border-radius: 5px;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 120px;
    height: 178px;
    margin: 8px;
    margin-bottom: 12px;
  }
`;

export const PersonName = styled.div`
  width: 176px;
  min-height: 29px;
  font-size: 18px;
  font-weight: 500;
  line-height: 28.6px;
  text-align: center;
  margin: 12px auto 22px auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 14px;
    line-height: 18.2px;
    max-width: 120px;
    margin-top: 0px;
    padding-top: 0px;
  }
`;
