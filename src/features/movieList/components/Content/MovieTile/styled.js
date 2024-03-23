import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 324px;
  max-height: 650px;
  gap: 0px;
  border-radius: 5px 0px 0px 0px;
  opacity: 0px;
  padding: 16px;
  box-shadow: 0px 4px 12px 0px #bac7d580;
  background-color: #ffffff;
`;

export const TileImage = styled.img`
  max-width: 292px;
  max-height: 434px;
  top: 16px;
  left: 16px;
  gap: 0px;
  border-radius: 5px 0px 0px 0px;
  opacity: 0px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: Hug (292px) px;
  max-height: Hug (105px) px;
  top: 466px;
  left: 16px;
  gap: 8px;
  opacity: 0px;
  margin-top: 16px;
`;

export const MovieTitle = styled.h2`
  max-width: 292px;
  max-height: 29px;
  gap: 0px;
  opacity: 0px;
  margin: 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 28.6px;
  text-align: left;
  color: #18181b;
`;

export const MovieYear = styled.p`
  max-width: 39px;
  max-height: 24px;
  gap: 0px;
  opacity: 0px;
  margin: 0;
  color: #7e839a;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;

export const CategoryTagWrapper = styled.div`
  display: flex;
  max-width: Hug (279px) px;
  max-height: Hug (36px) px;
  gap: 8px;
  opacity: 0px;
`;

export const CategoryTag = styled.div`
  max-width: Hug (77px) px;
  max-height: Hug (36px) px;
  padding: 8px 16px 8px 16px;
  gap: 10px;
  border-radius: 5px 0px 0px 0px;
  opacity: 0px;
  background: #e4e6f0;
`;

export const RatingWrapper = styled.div`
  display: flex;
  max-width: Hug (140px) px;
  max-height: Hug (24px) px;
  top: 610px;
  left: 16px;
  gap: 12px;
  opacity: 0px;
  margin: 39px 0 0 0;
`;

export const RateContainer = styled.div`
  max-width: 24px;
  max-height: 24px;
  gap: 0px;
  opacity: 0px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
`;

export const VoteContainer = styled.div`
  max-width: 68px;
  max-height: 24px;
  gap: 0px;
  opacity: 0px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #7e839a;
`;
