import styled from "styled-components";
import { showin } from "../../styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 294px;
  height: 650px;
  border-radius: 5px;
  padding: 16px;
  box-shadow: 0px 4px 12px 0px #bac7d580;
  background-color: ${({ theme }) => theme.color.White};
  transition: transform 0.5s ease;
  animation: ${showin} .3s ease;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    margin: 0 auto;
    }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: grid;
    grid-template-columns: auto 1fr;
    width: 320px;
  }
`;

export const TileImage = styled.img`
  max-width: 292px;
  height: 427px;
  margin: auto;
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 5px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 114px;
    height: 169px;
  }
`;

export const DescriptionContainer = styled.div`
  max-width: 292px;
  max-height: 105px;
  margin-top: 16px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 0 16px;
  }
`;

export const MovieTitle = styled.h2`
  max-width: 292px;
  height: auto;
  margin: 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 28.6px;
  text-align: left;
  color: #18181b;

  &:hover {
    cursor: pointer;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    line-height: 20.8px;
    }
`;

export const MovieYear = styled.p`
  width: 39px;
  height: 24px;
  margin: 8px 0 8px 0;
  color: #7e839a;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    line-height: 16.9px;
    }
`;

export const CategoryTagWrapper = styled.div`
  /* display: flex;
  max-width: 279px;
  max-height: 36px;
  height: auto; 
  gap: 8px;
  font-size: 13px; 
  flex-wrap: wrap; */

    list-style: none;
    display:flex;
    flex-wrap: wrap;
    padding-left: 0;
    /* margin: 16px -8px; */
    font-size: 13px; 


  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
    }
`;

export const CategoryTag = styled.div`
  max-width: auto;
  max-height: 36px;
  padding: 8px 16px 8px 16px;
  border-radius: 5px;
  background: #e4e6f0;
  white-space: nowrap;
  margin: 4px 4px 4px 0;

`;

export const RatingWrapper = styled.div`
  display: grid;
  grid-template-columns: 30px 40px 40px 70px;
  align-items: center;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    /* margin-top: 30px; */

  }
`;

export const RateContainer = styled.p`
  width: auto;
  max-height: 24px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-height: 17px;
    font-size: 13px;
    line-height: 16.9px;

  }
`;

export const VoteContainer = styled.p`
  max-width: 68px;
  white-space: nowrap;
  max-height: 24px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #7e839a;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 68px;
    max-height: 24px;
    font-size: 13px;
    line-height: 16.9px;
  }
`;

export const IconStar = styled.svg`
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
     width: 16px;
     height: 15.25px;
  }
`;
