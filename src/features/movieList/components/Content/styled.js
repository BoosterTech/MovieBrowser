import styled from "styled-components";

export const ContentWrapper = styled.section`
  max-width: 1368px;
  max-height: auto;
  top: 150px;
  left: 276px;
  color: ${({ theme }) => theme.color.Black};
  padding: 0;
  margin: 56px auto 40px auto;
`;

export const ContentHeader = styled.h1`
  max-width: 285px;
  max-height: 43px;
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  height: auto;
  max-width: 368px;
  margin: 24px 0;
`;
