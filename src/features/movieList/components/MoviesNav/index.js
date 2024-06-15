import { NavLink } from "react-router-dom";
import { NavItem, NavList } from "./styled";

const MoviesNav = () => {
  return (
    <div>
      <NavList>
        <NavItem>Popular Movies</NavItem>
        <li>Upcoming Movies</li>
      </NavList>
    </div>
  );
};

export default MoviesNav;
