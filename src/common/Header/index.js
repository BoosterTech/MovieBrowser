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
  } from "./styled";
  import Input from "./Input";
  
  export const Header = () => {
    return (
      <StyledHeader>
        <StyledUnit>
          <StyledItems>
              <Styledlink>
                <svg
                  width="50"
                  height="50"
                  fill="none"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m15 10 4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14v-4ZM5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z"></path>
                </svg>
                Moviies Film
              </Styledlink>
              <StyledContainerButton>
                <StyledButton>Movies</StyledButton>
                <StyledButton>People</StyledButton>
              </StyledContainerButton>
  
          </StyledItems>
          <StyledSearch>
            <Input placeholder="🔎 Search" />
          </StyledSearch>
        </StyledUnit>
      </StyledHeader>
    );
  };
  