import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.section`
  background-color: ${({ theme }) => theme.color.black};
  max-width: 100%;
  height: 94px;
  color: white;
  padding: 0 15px;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    height: 142px;
    padding: 0px;
  }
`;

export const StyledUnit = styled.div`
  max-width: 1368px;
  height: 94px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledItems = styled.div`
  height: 70px;
  display: flex;
  gap: 80px;
  align-items: center;
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

  &:hover {
    color: #e0e0e0;
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

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
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

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin: 0px;
    font-size: 12px;
    line-height: 18px;
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
`;

export const Input = styled.input`
  padding: 12px 0 12px 72px;
  width: 360px;
  height: 24px;
  border-radius: 33px;
  opacity: 0px;
  margin-left: auto;
  outline: none;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin: auto;
    width: 100%;
    height: 44px;
    padding: 0 15px;
  }
`;

export const Icon = styled.svg`
  position: absolute;
  left: 40px;
  top: 53%;
  transform: translateY(-50%);
  fill: none;
  width: 24px;
  height: 24px;
`;
