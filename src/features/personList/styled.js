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
  // border: 1px solid;
  max-width: 1368px;
  min-height: 750px;
  color: ${({ theme }) => theme.color.Black};
  padding: 0;
  margin: 56px auto 40px auto;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMin}px){
    margin: 24px 16px;
  }

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
  margin: 0 auto 24px 0;
  animation: ${showin} 1s ease;

  @media(max-width:${({theme}) => theme.breakpoints.mobileMin}px){
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

export const TilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
  height: auto;
  max-width: 368px;
  margin: 24px 0;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMin}px){
    grid-template-columns: repeat(2,1fr);
    text-align: center;
    gap: 16px
  }

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMedium}px){
    grid-template-columns: repeat(3,1fr);
    text-align: center;
    gap: 16px
  }
`;
