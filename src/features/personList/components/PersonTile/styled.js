import styled from "styled-components";
import { showin } from "../../styled";

export const TileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 339x;
  width: 208px;
  margin: 0 0 24px 0;
  color: black;
  box-shadow: 0px 4px 12px 0px #bac7d580;
  animation: ${showin} 1s ease;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const TileImage = styled.img`
  width: 176px;
  height: 231px;
  margin: 16px 16px 12px 16px;
  border-radius: 5px;
`;

export const PersonName = styled.div`
  width: 176px;
  height: 74px;
  margin: 0;
  padding-top: 0;
  text-align: center;
  font-weight: 500;
`;
