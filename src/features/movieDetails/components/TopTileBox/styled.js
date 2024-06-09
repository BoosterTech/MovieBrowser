import styled from "styled-components";
import { ReactComponent as VignetteSVG } from "../../../../assets/images/backdrop-vignette.svg";
import ReactPlayer from "react-player";

export const PosterContainer = styled.section`
  background-color: ${({ theme }) => theme.color.Black};
`;

export const Poster = styled.div`
  position: relative;
  margin: auto;
  max-width: 1368px;
  aspect-ratio: 2.1622;
  background: ${({ $background }) => `url('${$background}')`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const TrailerButton = styled.button`
  position: absolute;
  top: 0%;
  left: 50%;
  padding: 5px 10px;
  border-radius: 25px;
  z-index: 100;
  background: transparent;
  color: white;
  border: 1px solid transparent;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.Gray};
    /* border: 1px solid white; */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
 
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
  
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
  padding: 2px;
  }
`;

// export const CloseTrailerButton = styled(WatchTrailerButton)`
//   border: none;
//   top: 8%;
//   left: 50%;
//   padding: 10px;
//   display: ${({ $display }) => ($display ? "block" : "none")};
// `;

export const TrailerPlayer = styled(ReactPlayer)`
  opacity: 0;
  transition: all 5s;

  ${(props) =>
    props.$show &&
    ` 
      opacity:1;
      display: block;
    `}
`;

export const GradientCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    #000000 0%,
    rgba(0, 0, 0, 0.7) 1%,
    rgba(0, 0, 0, 0.3) 3%,
    rgba(0, 0, 0, 0.15) 6%,
    rgba(0, 0, 0, 0) 10%
  );

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    background: linear-gradient(
      180deg,
      #000000 0%,
      rgba(0, 0, 0, 0.7) 1%,
      rgba(0, 0, 0, 0.3) 3%,
      rgba(0, 0, 0, 0.15) 6%,
      rgba(0, 0, 0, 0) 10%
    );
  }
`;

export const Vignette = styled(VignetteSVG)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const TitleWrapper = styled.div`
  color: ${({ theme }) => theme.color.White};
  bottom: 0px;
  left: 0px;
  position: absolute;
  text-align: left;
  padding: 0 16px;
  padding-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    padding: 0 0 46px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    padding: 0 0 36px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 0 0 26px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    padding: 0 0 16px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    padding: 0 0 8px 16px;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 64px;
  margin-bottom: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    font-size: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMediumMin}px) {
    font-size: 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 24px;
  }
`;

export const RatingWrapper = styled.div`
  max-width: 130px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;
  margin-bottom: 0;
  gap: 8px;
`;

export const IconStar = styled.div`
  width: 40px;
  height: 38.12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    width: 35px;
    height: 33px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 27px;
    height: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    width: 20px;
    height: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    width: 16px;
    height: 15.25px;
    margin: 0;
  }
`;

export const RateContainer = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 25px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 14px;
  }
`;

export const VoteContainer = styled.div`
  margin-top: 6px;
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 10px;
  }
`;

export const ScoreLimit = styled.div`
  padding-top: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 15px;
    padding-top: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    font-size: 12px;
    padding-top: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 10px;
    padding-top: 3px;
  }
`;
