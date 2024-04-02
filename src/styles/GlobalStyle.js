import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize}
html{
    box-sizing: border-box;
    padding: 0px;
}

::before,
::after{
    box-sizing: inherit;
    padding: 0px;
}

body {
   background-color: ${({ theme }) => theme.color.Whisper};
   padding: 0px;
   font-family: Poppins;
   margin: 0;
   overflow-y: scroll;
};
`;
