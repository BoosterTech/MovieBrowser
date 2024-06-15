import { NavItem, NavList } from "./styled";
import navBarItems from "./navBarItems";

const MoviesNav = () => {
  return (
    <div>
      <NavList>
        {navBarItems.map((item) => (
          <NavItem>{item}</NavItem>
        ))}
      </NavList>
    </div>
  );
};

export default MoviesNav;
