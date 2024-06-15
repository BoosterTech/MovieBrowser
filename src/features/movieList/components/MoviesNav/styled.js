import styled from "styled-components";

export const NavList = styled.ul`

  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 100px;
  list-style-type: none;
 
  font-weight: 600;
  padding: 30px 15px 30px 15px;
  margin-top: 0;
  border-radius: 5px;
`;

export const NavItem = styled.li`
  font-size: 1.4rem;
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
`;
