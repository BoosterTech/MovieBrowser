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
  background-color: #ffffff;
  transition: transform 0.5s ease;
  animation: ${showin} .3s ease;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const TileImage = styled.img`
  max-width: 292px;
  height: 427px;
  margin: auto;
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 5px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 292px;
  max-height: 105px;
  margin-top: 16px;
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
`;

export const CategoryTagWrapper = styled.div`
  display: flex;
  max-width: 279px;
  max-height: 36px;
  height: auto;
  gap: 8px;
  font-size: 13px;
  flex-wrap: wrap;
`;

export const CategoryTag = styled.div`
  max-width: auto;
  max-height: 36px;
  padding: 5px 10px 4px 10px;
  border-radius: 5px;
  background: #e4e6f0;
  white-space: nowrap;
`;

export const RatingWrapper = styled.div`
  display: flex;
  max-width: 140px;
  max-height: 24px;
  gap: 12px;
  margin: auto 0 0 0;
`;

export const RateContainer = styled.div`
  width: auto;
  max-height: 24px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
`;

export const VoteContainer = styled.div`
  max-width: 68px;
  white-space: nowrap;
  max-height: 24px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #7e839a;
`;
