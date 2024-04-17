import {
  StyledButton,
  StyledHeader,
  StyledItems,
  StyledUnit,
  StyledContainerButton,
  StyledContainerLink,
  SearchWrapper,
  Icon,
  StyledNavLink2,
  StyledNavLink1,
  VideoIconSet,
} from "./styled";
import { toMovieListPage, toPeople } from "../../routes";
import { ReactComponent as SearchIcon } from "../../assets/images/SearchIcon.svg";
import { ReactComponent as VideoIcon } from "../../assets/images/NavVideoIcon.svg";
import {
  selectSettingSearchValue,
  setBothPages,
  setSearchState,
} from "../../Redux_store/settingSlice";
import Search from "../Search";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Navigation = () => {
  const [activeButton, setActiveButton] = useState(
    sessionStorage.getItem("buttonState") || "button1"
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const searchState = useSelector(selectSettingSearchValue);

  const handleClick = (buttonId) => {
    if (searchState) dispatch(setSearchState(false));

    setActiveButton(buttonId);
  };
  const handleOnClick = () => {
    dispatch(setBothPages(1));
    if (searchState) dispatch(setSearchState(false));
    setActiveButton("button1");
    sessionStorage.setItem("buttonState", "button1");
    sessionStorage.setItem("moviesPageNr", 1);
    sessionStorage.setItem("peoplePageNr", 1);
  };

  useEffect(() => {
    const path = location.pathname;

    if (path.includes("people")) {
      setActiveButton("button2");
      sessionStorage.setItem("buttonState", "button2");
    } else {
      setActiveButton("button1");
      sessionStorage.setItem("buttonState", "button1");
    }
  }, [location.pathname]);

  return (
    <StyledHeader>
      <StyledUnit>
        <StyledItems>
          <StyledContainerLink to={toMovieListPage()} onClick={handleOnClick}>
            <VideoIconSet as={VideoIcon} />
            Movies Browser
          </StyledContainerLink>
          <StyledContainerButton>
            <StyledNavLink1
              to={toMovieListPage()}
              onClick={() => handleClick("button1")}
            >
              <StyledButton id="button1" $active={activeButton === "button1"}>
                MOVIES
              </StyledButton>
            </StyledNavLink1>
            <StyledNavLink2
              to={toPeople()}
              onClick={() => handleClick("button2")}
            >
              <StyledButton id="button2" $active={activeButton === "button2"}>
                PEOPLE
              </StyledButton>
            </StyledNavLink2>
          </StyledContainerButton>
        </StyledItems>
        <SearchWrapper>
          <Search />
          <Icon as={SearchIcon} />
        </SearchWrapper>
      </StyledUnit>
    </StyledHeader>
  );
};
