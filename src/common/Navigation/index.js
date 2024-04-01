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
} from "./styled";
import { Input } from "./styled";
import { toMovieListPage, toPeople } from "../../routes";
import { ReactComponent as SearchIcon } from "../../assets/images/SearchIcon.svg";
import { ReactComponent as VideoIcon } from "../../assets/images/NavVideoIcon.svg";
import { selectSettingPageStateValue } from "../../Redux_store/settingSlice";
import { useSelector } from "react-redux";

export const Navigation = () => {
  const pageState = useSelector(selectSettingPageStateValue);

  return (
    <StyledHeader>
      <StyledUnit>
        <StyledItems>
          <StyledContainerLink to={toMovieListPage()}>
            <VideoIcon />
            Movies Browser
          </StyledContainerLink>
          <StyledContainerButton>
            <StyledButton>
              <StyledNavLink1 to={toMovieListPage()}>MOVIE</StyledNavLink1>
            </StyledButton>
            <StyledButton>
              <StyledNavLink2 to={toPeople()}>PEOPLE</StyledNavLink2>
            </StyledButton>
          </StyledContainerButton>
        </StyledItems>
        <SearchWrapper>
          <Input
            type="text"
            placeholder={
              pageState === "movies"
                ? "            Search for movies..."
                : "            Search for people..."
            }
          />
          <Icon as={SearchIcon} />
        </SearchWrapper>
      </StyledUnit>
    </StyledHeader>
  );
};
