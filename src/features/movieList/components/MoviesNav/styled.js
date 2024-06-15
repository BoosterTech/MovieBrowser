import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  gap: 100px;
  list-style-type: none;
  font-size: 2.2rem;
  font-weight: 600;
  border-radius: 2px;
  padding: 30px 15px 30px 15px;
  margin-top: 0;
`;

export const NavItem = styled.li`
  font-size: 1.3rem;
  color: ${({ $active }) => ($active ? "white" : "black")};
  padding: 10px 50px;
  border: 1px solid transparent;
  border-radius: 25px;
  text-align: center;
  background-color: ${({ $active }) => ($active ? "black" : "transparent")};

  transition: all 0.5s ease;

  &:hover {
    border: 1px solid black;
    cursor: pointer;
  }
`;

export const NavLinkItem = styled(NavLink)`
  text-decoration: none;

  &.active ${NavItem} {
    border: 1px solid black;

    font-size: 2rem;
  }
`;
