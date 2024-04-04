import styled, { keyframes } from "styled-components";

export const showin = keyframes`
  0% {
   opacity:0;
  }
  100% {
    opacity:1;
  }
`;

export const ContentWrapper = styled.section`
  max-width: 1368px;
  min-height: 750px;
  color: ${({ theme }) => theme.color.Black};
  padding: 0;
  margin: 56px auto 40px auto;
`;

export const ContentHeader = styled.h1`
  width: 285px;
  max-height: 43px;
  font-family: Poppins;
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  text-align: left;
  color: #18181b;
  margin: 0;
  padding: 0;
  animation: ${showin} 1s ease;
`;

export const TilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  height: auto;
  max-width: 1368px;
  margin: 24px 0 0 0;

  ${(props) =>
    props.persontile &&
    `
  grid-template-columns: repeat(6, 1fr);
  `}
`;
