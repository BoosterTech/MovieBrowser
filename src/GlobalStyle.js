import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
};



`;
