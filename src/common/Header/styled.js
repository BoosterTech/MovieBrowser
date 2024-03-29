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
  max-width: 1600px;
  height: 94px;
  margin: 0 293px auto;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0px;
    height: 142px;
    align-items: center;
    margin: 0 20px;
  }
`;

export const StyledItems = styled.div`
  height: 70px;
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  grid-gap: 80px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: flex;
    justify-content: space-between;
    grid-gap: 6px;
  }
`;

export const StyledSearch = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;

export const StyledContainerLink = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 12px;
  max-width: 220px;
  height: 48px;
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

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 18px;
    margin-right: 0px;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 12px;
    margin-right: 0px;
  }
`;
export const StyledContainerButton = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 16px;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    grid-gap: 0px;
  }
`;

export const StyledButton = styled.button`
  border: solid 1px transparent;
  max-width: 120px;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  height: 48px;
  padding: 8px 24px 8px 24px;
  border-radius: 24px;
  background-color: transparent;
  color: white;
  margin: 10px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:active {
    border: solid 1px;
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin: 0px;
    font-size: 12px;
    line-height: 18px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;

  &.active {
    font-weight: bold;
  }
`;
