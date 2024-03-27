import {
  Block,
  StyledButton,
  StyledHeader,
  StyledItems,
  Styledlink,
  StyledSearch,
  StyledUnit,
  StyledContainerButton,
  StyledLinkButton,
  StyledContainerLink,
  StyledLogo,
} from "./styled";
import Input from "./Input";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledUnit>
        <StyledItems>
          <StyledContainerLink>
            <StyledLogo>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m15 10 4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14v-4ZM5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z"></path>
              </svg>
            </StyledLogo>
            <Styledlink>Movies Browser</Styledlink>
          </StyledContainerLink>
          <StyledContainerButton>
            <StyledButton>MOVIES</StyledButton>
            <StyledButton>PEOPLE</StyledButton>
          </StyledContainerButton>
        </StyledItems>
        <StyledSearch>
          <Input placeholder="🔎 Search for movies..." />
        </StyledSearch>
      </StyledUnit>
    </StyledHeader>
  );
};
