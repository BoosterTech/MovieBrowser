import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.section`
  background-color: ${({ theme }) => theme.color.black};
  max-width: 100%;
  height: 94px;
  color: white;
  padding: 0 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    padding: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 142px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    height: 142px;
  }
`;

export const StyledUnit = styled.div`
  max-width: 1368px;
  height: 94px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    height: 142px;
  }
`;

export const StyledItems = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    grid-gap: 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    gap: 0;
    }
`;

export const StyledContainerLink = styled(NavLink)`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 12px;
  max-width: 220px;
  height: 48px;
  text-decoration: none;
  color: white;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -1.5px;
  font-weight: 500;
  margin-left: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 20px;
    margin-left: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    margin-left: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 14px;
    margin-left: 0px;
    }

  &:hover {
    color: #e0e0e0;
  }
`;

export const VideoIconSet = styled.svg`

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 20px;
    height: 20px;
  }
`;

export const StyledSearch = styled.div`
  position: relative;
`;

export const StyledLogo = styled.svg`
  color: white;
  width: 40px;
  height: 40px;
  fill: none;
  stroke: #ffffff;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 17px;
    height: 17px;
  }
`;

export const Styledlink = styled.a`
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -1.5px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }
`;
export const StyledContainerButton = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-gap: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    grid-gap: 0;
    padding: 0;
  }
`;

export const StyledButton = styled.button`
  border: none;
  width: 98px;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  height: 48px;
  padding: 8px 22px;
  border-radius: 24px;
  background-color: transparent;
  color: white;

  &:hover {
    cursor: pointer;
    border: 1px solid white;
    color: grey;
  }

  &:active {
    border: 1px solid white;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin: 0px;
    font-size: 14px;
    line-height: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0px;
    font-size: 12px;
    line-height: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin: 5px;
    font-size: 12px;
    line-height: 10px;
    padding: 0 12px;
    width: 68px;
    font-weight: 600;
    line-height: 21px;
    height: 48px;
    border-radius: 24px;
  }
`;

export const StyledNavLink1 = styled(NavLink)`
  color: white;
  text-decoration: none;

  &.active {
    color: #61bded;
  }
`;

export const StyledNavLink2 = styled(StyledNavLink1)``;

export const SearchWrapper = styled.div`
  display: inline-block;
  padding: 12px;
  width: 432px;
  height: 48px;
  border-radius: 33px;
  opacity: 0px;
  margin-left: auto;
  align-items: center;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    display: flex;
    align-items: center;
    width: 390px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    display: flex;
    align-items: center;
    width: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0 auto;
    width: 360px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin: 0 auto;
    width: 280px;
    margin: 0 auto;

  }
`;

export const Input = styled.input`
  padding: 12px 0 12px 72px;
  width: 360px;
  height: 24px;
  border-radius: 33px;
  opacity: 0px;
  margin-left: auto;
  outline: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    width: 200px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 288px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    width: 260px;
  }
`;

export const Icon = styled.svg`
  position: absolute;
  margin-left: 30px;
  top: 53%;
  transform: translateY(-50%);
  fill: none;
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin-left: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-left: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin-left: 15px;
  }
`;
