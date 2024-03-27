import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize}
html{
    box-sizing: border-box;
}

::before,
::after{
    box-sizing: inherit;
}

body {
   background-color:#F5F5FA;
   font-family: Poppins;
};



`;
