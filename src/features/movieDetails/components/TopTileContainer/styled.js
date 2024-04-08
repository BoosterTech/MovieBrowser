import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100vw;
  height: 770px;
  background: ${({ theme }) => theme.color.Black};
  display: grid;
  justify-content: center;
  background: linear-gradient(189.44deg, rgba(0, 0, 0, 0) 58.48%, rgba(0, 0, 0, 0.106473) 63.17%, rgba(0, 0, 0, 0.235359) 68.85%, rgba(0, 0, 0, 0.492821) 78.08%, rgba(0, 0, 0, 0.740286) 85.86%, #000000 92.87%),
  linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.689555) 4.66%, rgba(0, 0, 0, 0.439033) 9.34%, rgba(0, 0, 0, 0.20628) 15.16%, rgba(0, 0, 0, 0) 24.22%),
  linear-gradient(90deg, #000000 13.6%, rgba(0, 0, 0, 0.984059) 14.58%, rgba(0, 0, 0, 0.967732) 15.44%, rgba(0, 0, 0, 0.865569) 16.3%, rgba(0, 0, 0, 0.230315) 22.87%, rgba(0, 0, 0, 0) 26.64%),
  linear-gradient(270deg, #000000 14.11%, rgba(0, 0, 0, 0.873268) 15.08%, rgba(0, 0, 0, 0.720529) 16.51%, rgba(0, 0, 0, 0.294577) 19.99%, rgba(0, 0, 0, 0.159921) 21.88%, rgba(0, 0, 0, 0) 25.68%);
  color: black;
`;

export const ShadowContainer = styled.div`
width: 1920px;
height: 770px;
display: grid;
justify-content: center;
margin: 0 auto;

`;

export const IconPoster = styled.svg`
 opacity: 40%;
  
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 64px;
  margin-bottom: 100px;
`;

export const RatingWrapper = styled.div`
  /* margin-bottom: 130px ; */
  display: grid;
  grid-template-columns: 40px 20px 20px ;
  grid-gap: 7px;
  align-items: center;
`;

export const IconStar = styled.div`
  width: 40px;
  height: 38.12px;
`;

export const RateContainer = styled.div`
  
`;

export const VoteContainer = styled.div`
  
`;

export const ScoreLimit = styled.div`
`