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
  top: 8%;
  left: 50%;
  padding: 5px 10px;
  border-radius: 25px;
  z-index: 100;
  background: transparent;
  color: white;
  border: ${({ $display }) =>
    $display ? "1px solid transparent" : "1px solid white"};
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: darkgrey;
      border: 1px solid white;
    }

    ${({ $disabled }) => $disabled && `pointer-events: none;`}
  }

  /* @media (max-width: ${({ theme }) =>
    theme.breakpoints.tabletHorizontalMax}) {
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}) {
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {

  } */
`;

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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}) {
    padding: 0 0 46px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    padding: 0 0 36px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: 0 0 26px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}) {
    padding: 0 0 16px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    padding: 0 0 8px 16px;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 64px;
  margin-bottom: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}) {
    font-size: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    font-size: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMediumMin}) {
    font-size: 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    font-size: 24px;
  }
`;

export const RatingWrapper = styled.div`
  max-width: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin: 20px auto 0 10px;

  gap: 5px;

  & > :nth-child(2) {
    margin-left: 10px;
  }

  & > :nth-child(2) {
    margin-right: 0px;
  }
`;

export const IconStar = styled.div`
  max-width: 40px;
  height: 50px;
  width: auto;
  max-height: 38.12px;
  margin-bottom: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    height: 35px;
    margin-bottom: 7px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    height: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    height: 20px;
    margin-bottom: 1px;
  }
`;

export const RateContainer = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    font-size: 25px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    font-size: 14px;
  }
`;

export const VoteContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}) {
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    font-size: 10px;
    margin-top: 1px;
  }
`;

export const ScoreLimit = styled.div`
  text-align: center;
  justify-content: center;
  padding: 2px;
  padding-left: 0;
  margin-right: 10px;
  margin-left: 0;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}) {
    font-size: 13px;
    margin-right: 5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    font-size: 10px;
    padding-top: 3px;
    margin-right: 3px;
  }
`;
