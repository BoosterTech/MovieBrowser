import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize}

/* For WebKit-based browsers (e.g., Chrome, Safari) */
::-webkit-scrollbar {
    width: 2px; 
  }

/* For Firefox */
  * {
    scrollbar-width: thin; 
  }

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
   background-color:#F5F5FA;
   padding: 0px;
   font-family: Poppins;
   margin: 0;
   overflow-y: scroll;
};
`;
