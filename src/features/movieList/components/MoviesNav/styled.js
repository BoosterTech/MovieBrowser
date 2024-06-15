import styled from "styled-components";

export const NavList = styled.ul`
  position: relative;
  display: ${({ $visible }) => (!$visible ? "flex" : "none")};
  align-items: center;
  justify-content: space-evenly;
  gap: 100px;
  list-style-type: none;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 30px 15px 30px 15px;
  margin-top: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.desktopMini}) {
    gap: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    gap: 20px;
    padding: 10px 5px 20px 5px;
    font-size: 1.2rem;
    justify-content: space-around;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}) {
    flex-direction: column;
    gap: 5px;
    padding: 10px 5px 10px 5px;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
  }
`;

export const NavItem = styled.li`
  color: ${({ $active }) => ($active ? "white" : "black")};
  padding: 10px 50px;
  border: 1px solid transparent;
  border-radius: 25px;
  text-align: center;
  background-color: ${({ $active }) =>
    $active ? "darkorange" : "transparent"};
  transition: all 0.5s ease;

  &:hover {
    border: 1px solid darkorange;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    padding: 7px 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: 5px 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}) {
    padding: 10px 30%;
  }
`;
