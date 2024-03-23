import styled from "styled-components";

export const ContentWrapper = styled.section`
  max-width: 1368px;
  max-height: 1391px;
  top: 150px;
  left: 276px;
  gap: 0px;
  opacity: 0px;
  color: ${({ theme }) => theme.color.Black};
  padding: 0;
  margin: 56px auto 0 auto;
`;

export const ContentHeader = styled.h1`
  max-width: 285px;
  max-height: 43px;
  top: 150px;
  left: 276px;
  gap: 0px;
  opacity: 0px;
  font-family: Poppins;
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  text-align: left;
  color: #18181b;
  margin: 0;
  padding: 0;
`;

export const TilesContainer = styled.div`
  width: Hug (1, 368px) px;
  height: Hug (650px) px;
  top: 217px;
  left: 276px; 
  display: flex;
  margin: 24px 0;
`;
