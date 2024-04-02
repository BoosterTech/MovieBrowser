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
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";
import { ReactComponent as VideoIcon } from "../../assets/NavVideoIcon.svg";


export const Navigation = () => {
  return (
    <StyledHeader>
      <StyledUnit>
        <StyledItems>
          <StyledContainerLink to={toMovieListPage()}>
            <VideoIconSet as={VideoIcon}/>
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
          <Input type="text" placeholder="Search for movies..." />
          <Icon as={SearchIcon} />
        </SearchWrapper>
      </StyledUnit>
    </StyledHeader>
  );
};
