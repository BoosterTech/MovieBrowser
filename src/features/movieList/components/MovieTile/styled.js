import styled from "styled-components";
import { showin } from "../../styled";

export const MovieTileWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 294px;
  max-height: 650px;
  border-radius: 5px;
  padding: 16px;
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.Heather};
  background-color: ${({ theme }) => theme.color.White};
  transition: transform 0.5s ease;
  animation: ${showin} 0.3s ease;
  color: ${({ theme }) => theme.color.Woodsmoke};

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    margin: 0 auto;

    &:hover {
      transform: scale(1);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    grid-template-rows: auto;
    margin: auto;
    width: 256px;
  }
`;

export const TileImage = styled.img`
  max-width: 292px;
  height: 427px;
  margin-top: 16;
  margin-bottom: 0;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 114px;
    height: 169px;
  }
`;

export const DescriptionContainer = styled.div`
  max-width: 292px;
  max-height: 285px;
  margin-top: 16px;
  display: grid;
  grid-template-rows: repeat(3, auto) 1fr auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 0 0 0 16px;
    margin-top: 0px;
    max-height: 250px;
    width: 126px;
    display: grid;
    grid-template-rows: repeat(3, auto) 1fr auto;
  }
`;

export const MovieTitle = styled.h2`
  max-width: 292px;
  margin: 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 28.6px;
  text-align: left;
  color: ${({ theme }) => theme.color.Woodsmoke};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    line-height: 20.8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin-bottom: 4px;
  }
`;

export const MovieYear = styled.p`
  min-width: 39px;
  height: 24px;
  margin: 8px 0;
  color: ${({ theme }) => theme.color.Waterloo};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    line-height: 16.9px;
    height: 17px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin: 0;
  }
`;

export const CategoryTagWrapper = styled.div`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  font-size: 13px;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
    margin: px 0;
  }
`;

export const CategoryTag = styled.div`
  max-height: 19px;
  padding: 4px 8px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.Mystic};
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
  }
`;

export const RatingWrapper = styled.div`
  display: grid;
  grid-template-columns: 16px 22px 40px;
  gap: 12px;
  margin: auto auto 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-gap: 4px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    grid-gap: 4px;
  }
`;

export const RateContainer = styled.div`
  width: auto;
  max-height: 24px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
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
  color: ${({ theme }) => theme.color.Waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 68px;
    max-height: 24px;
    font-size: 13px;
    line-height: 16.9px;
  }
`;

export const IconStar = styled.svg`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
    height: 15.25px;
  }
`;
