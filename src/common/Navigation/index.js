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
import { Input } from "./styled";
import { toMovieListPage, toPeople } from "../../routes";
import { ReactComponent as SearchIcon } from "../../assets/images/SearchIcon.svg";
import { ReactComponent as VideoIcon } from "../../assets/images/NavVideoIcon.svg";
import {
  selectSettingPageStateValue,
  setBothPages,
} from "../../Redux_store/settingSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export const Navigation = () => {
  const [activeButton, setActiveButton] = useState("button1");
  const pageState = useSelector(selectSettingPageStateValue);
  const dispatch = useDispatch();

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  const handleOnClick = () => {
    dispatch(setBothPages());
  };

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
              <StyledButton id="button1" active={activeButton === "button1"}>
                MOVIES
              </StyledButton>
            </StyledNavLink1>
            <StyledNavLink2
              to={toPeople()}
              onClick={() => handleClick("button2")}
            >
              <StyledButton id="button2" active={activeButton === "button2"}>
                PEOPLE
              </StyledButton>
            </StyledNavLink2>
          </StyledContainerButton>
        </StyledItems>
        <SearchWrapper>
          <Input
            type="text"
            name="search"
            placeholder={
              pageState === "movies"
                ? "Search for movies..."
                : "Search for people..."
            }
          />
          <Icon as={SearchIcon} />
        </SearchWrapper>
      </StyledUnit>
    </StyledHeader>
  );
};
