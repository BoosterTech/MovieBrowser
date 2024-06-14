import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.section`
  background-color: ${({ theme }) => theme.color.Black};
  width: 100%;
  max-height: 94px;
  color: ${({ theme }) => theme.color.White};
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}) {
    height: 130px;
    max-height: 170px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    height: 142px;
  }
`;

export const StyledItems = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  padding-left: 10px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopMini}) {
    grid-gap: 60px;
    padding-left: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}) {
    grid-gap: 60px;
    padding-left: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    gap: 10px;
    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    gap: 10px;
    margin: 16px 0 10px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    font-size: 17px;
    margin-left: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 16px;
    margin-left: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    font-size: 13px;
    margin-left: 16px;
    grid-gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileUltraMin}) {
    font-size: 12px;
  }

  &:hover {
    color: ${({ theme }) => theme.color.Alto};
  }
`;

export const VideoIconSet = styled.svg`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    grid-gap: 5px;
    margin-left: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-gap: 12px;
    padding: 0 10px 0 0;
    margin-left: 19px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileUltraMin}) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    margin: 0px;
    font-size: 14px;
    line-height: 18px;
    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 12px;
    line-height: 10px;
    width: 70px;
    font-weight: 600;
    line-height: 21px;
    height: 34px;
    border-radius: 29px;
    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    font-size: 12px;
    width: 70px;
    height: 34px;
    border-radius: 24px;
    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileUltraMin}) {
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
  padding-right: 15px;

  @media (max-width: ${({ theme }) =>
      theme.breakpoints.tabletHorizontalMax}) {
    display: flex;
    align-items: center;
    width: 390px;
    margin: 0 16px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    display: flex;
    align-items: center;
    width: 320px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 16px 24px 12px 20px;
    width: 250px;
    height: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}) {
    margin: 8px 12px 16px 10px;
    width: 320px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    margin: 14px 12px 12px 12px;
    width: 288px;
    height: 44px;
    padding-right: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileUltraMin}) {
    width: 244px;
    height: 36px;
    margin: 8px 8px 12px 8px;
  }
`;

export const Input = styled.input`
  padding: 12px 0 12px 72px;
  width: 360px;
  height: 24px;
  border-radius: 33px;
  margin-left: auto;
  outline: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    width: 330px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 300px;
    padding: 12px 0 12px 50px;
    height: 12px;
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    width: 240px;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileUltraMin}) {
    width: 240px;
  }
`;

export const Icon = styled.svg`
  position: absolute;
  margin-left: 30px;
  top: 53%;
  left: 0;
  transform: translate(-50%, -50%);
  fill: none;
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    top: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    top: 53%;
    left: 0%;
    width: 20px;
    height: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}) {
    top: 50%;
    left: 0%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}) {
    top: 52%;
    left: -2%;
  }
`;
