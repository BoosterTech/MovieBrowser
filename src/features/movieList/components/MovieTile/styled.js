import styled from "styled-components";
import { showin } from "../../styled";

export const Wrapper = styled.div`
  width: 294px;
  max-height: 700px;
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

    &:hover {
    transform: scale(1);
    }
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: grid;
    grid-template-columns: auto 1fr;
    width: 288px;
    max-height: 300px;
  }
`;

export const TileImage = styled.img`
  max-width: 292px;
  height: 427px;
  margin: auto;
  margin-top: 16;
  margin-bottom: 0;
  border-radius: 5px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 114px;
    height: 169px;
  }
`;

export const DescriptionContainer = styled.div`
  max-width: 292px;
  max-height: 285px;
  margin-top: 16px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 0 0 0 16px;
    margin-top: 0px;
    max-height: 220px;
    max-width: 160px;
  }
`;

export const MovieTitle = styled.h2`
  max-width: 160px;
  height: auto;
  margin: 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 28.6px;
  text-align: left;
  color: #18181b;
  word-wrap: break-word;

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
  list-style: none;
  display:flex;
  flex-wrap: wrap;
  padding-left: 0;
  font-size: 13px; 

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
    }
`;

export const CategoryTag = styled.div`
  max-width: auto;
  max-height: 19px;
  padding: 4px 8px 4px 8px;
  border-radius: 5px;
  background: #e4e6f0;
  white-space: nowrap;
  margin: 0 4px 10px 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0 4px 8px 0; 
    }
`;

export const RatingWrapper = styled.div`
  display: grid;
  grid-template-columns: 25px 30px 40px 70px;
  align-items: center;
  grid-gap: 4px;
`;

export const RateContainer = styled.div`
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

export const VoteContainer = styled.div`
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
