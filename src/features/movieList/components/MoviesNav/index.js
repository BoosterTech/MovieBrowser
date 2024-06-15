import { NavItem, NavLinkItem, NavList } from "./styled";
import navBarItems from "./navBarItems";
import {
  selectSettingMovieStateValue,
  setMovieState,
} from "../../../../Redux_store/settingSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MoviesNav = () => {
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState(
    useSelector(selectSettingMovieStateValue)
  );

  const handleClick = (item) => {
 

    dispatch(setMovieState(item));
    setActiveItem(item);
  };

  return (
    <div>
      <NavList>
        {navBarItems.map((item, index) => (
          <NavItem
            key={index}
            onClick={() => handleClick(item)}
            $active={item.toLowerCase() === activeItem.toLowerCase()}
          >
            {item}
          </NavItem>
        ))}
      </NavList>
    </div>
  );
};

export default MoviesNav;
