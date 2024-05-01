import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.section`
  background-color: ${({ theme }) => theme.color.Black};
  width: 100%;
  max-height: 94px;
  color: ${({ theme }) => theme.color.White};
  padding: 0 15px 0 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    padding: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    height: 130px;
    max-height: 170px;
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
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    height: 142px;
  }
`;

export const StyledItems = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    grid-gap: 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    gap: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 0;
    margin: 16px 0 10px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    gap: 0;
    margin: 24px 0 10px 0;
    height: 34px;
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
  color: ${({ theme }) => theme.color.White};
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -1.5px;
  font-weight: 500;
  margin-left: -10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 17px;
    margin-left: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    margin-left: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 13px;
    margin-left: 16px;
    grid-gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileUltraMin}px) {
    font-size: 12px;
  }

  &:hover {
    color: ${({ theme }) => theme.color.Alto};
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
  color: ${({ theme }) => theme.color.White};
  width: 40px;
  height: 40px;
  fill: none;
  stroke: ${({ theme }) => theme.color.Black};
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
    grid-gap: 5px;
    margin-left: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-gap: 12px;
    padding: 0;
    margin-left: 19px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileUltraMin}px) {
    grid-gap: 8px;
  }
`;

export const StyledButton = styled.button`
  width: 98px;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  height: 48px;
  border-radius: 24px;
  background-color: transparent;
  color: ${({ theme }) => theme.color.White};
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.Gray};
  }
  border: ${(props) => (props.$active ? "1px solid white" : "none")};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin: 0px;
    font-size: 14px;
    line-height: 18px;
    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    line-height: 10px;
    width: 70px;
    font-weight: 600;
    line-height: 21px;
    height: 34px;
    border-radius: 29px;
    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 12px;
    width: 70px;
    height: 34px;
    border-radius: 24px;
    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileUltraMin}px) {
    font-size: 10px;
    width: 60px;
    height: 28px;  
  }
`;

export const StyledNavLink1 = styled(NavLink)`
  color: ${({ theme }) => theme.color.White};
  text-decoration: none;
`;

export const StyledNavLink2 = styled(StyledNavLink1)``;

export const SearchWrapper = styled.div`
  display: inline-block;
  padding: 0 40px 0 0;
  width: 432px;
  height: 48px;
  border-radius: 33px;
  margin-left: auto;
  align-items: center;
  position: relative;

  @media (max-width: ${({ theme }) =>theme.breakpoints.tabletHorizontalMax}px) {
    display: flex;
    align-items: center;
    width: 390px;
    margin: 0 16px 0 0;
    padding: 0 40px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    display: flex;
    align-items: center;
    width: 320px;
    margin: 0 16px 0 0;
    padding: 0 16px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 16px 24px 12px 20px;
    width: 250px;
    height: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    margin: 8px 12px 16px 20px;
    width: 320px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin: 14px 12px 12px 12px;
    width: 288px;
    height: 44px;
    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileUltraMin}px) {
    width: 260px;
    height: 36px; 
    margin: 8px 12px 12px 12px;

  }
`;

export const Input = styled.input`
  padding: 12px 0 12px 72px;
  width: 360px;
  height: 24px;
  border-radius: 33px;
  margin-left: auto;
  outline: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    width: 330px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 300px;
    padding: 12px 0 12px 50px;
    height: 12px;
    font-size: 14px;

  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    width: 288px;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileUltraMin}px) {
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
    margin-left: 20px;
    transform: translateY(-60%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-left: 15px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    margin-left: 15px;
    transform: translateY(-60%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin-left: 15px;
    transform: translateY(-60%);
  }
`;
