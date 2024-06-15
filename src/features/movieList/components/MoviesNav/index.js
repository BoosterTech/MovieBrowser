import { NavItem, NavList } from "./styled";
import navBarItems from "./navBarItems";
import {
  selectSettingMovieStateValue,
  selectSettingSearchValue,
  setMovieState,
} from "../../../../Redux_store/settingSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MoviesNav = () => {
  const dispatch = useDispatch();
  const movieStateValue = useSelector(selectSettingMovieStateValue);
  const searchStateValue = useSelector(selectSettingSearchValue);
  const [activeItem, setActiveItem] = useState(movieStateValue);
  const [searchState, setSearchState] = useState(searchStateValue);

  useEffect(() => {
    setActiveItem(movieStateValue);
  }, [movieStateValue]);

  useEffect(() => {
    setSearchState(searchStateValue);
  }, [searchStateValue]);

  const handleClick = (item) => {
    dispatch(setMovieState(item));
    setActiveItem(item);
  };

  return (
    <NavList $visible={searchState}>
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
  );
};

export default MoviesNav;
