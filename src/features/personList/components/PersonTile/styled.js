import styled from "styled-components";
import { showin } from "../../styled";

export const TileWrapper = styled.div`
  // border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 339x;
  width: 208px;
  margin: 0 0 24px 0;
  border-radius: 5px;
  color: black;
  box-shadow: 0px 4px 12px 0px #bac7d580;
  animation: ${showin} 1s ease;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMin}px){
    width: 136px;
    height: 245px;
    margin: auto;
  }

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMedium}px){
    width: 136px;
    height: 245px;
    margin: auto;
  }
`;

export const TileImage = styled.img`
  width: 176px;
  height: 231px;
  margin: auto;
  margin-top: 16px;
  border-radius: 5px;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMin}px){
    width: 120px;
    height: 178px;
    margin: 8px;
  }

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMEdium}px){
    width: 120px;
    height: 178px;
    margin: 8px;
  }
`;

export const PersonName = styled.div`
  width: 176px;
  height: 74px;
  margin:  12px auto;
  padding-top: 8px;
  text-align: center;
  font-weight: 500;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMin}px){
    font-size: 14px;
    line-height: 18.2px;
    max-width: 120px;
    margin-top: 0px;
    padding-top: 0px;
  }
`;
