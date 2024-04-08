import { styled, keyframes } from "styled-components";

export const rotation = keyframes`
0%{ transform: rotate(0deg);
}
100%{transform:rotate(360deg);
}`;

export const StyledSvg = styled.svg`
  display: block;
  max-width: 91px;
  max-height: 91px;
  margin: auto;
  margin-top: 219px;
  fill: #f5f5fa;
  animation: ${rotation} 1s linear infinite;
`;
