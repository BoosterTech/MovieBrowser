import { styled, keyframes } from "styled-components";

export const rotation = keyframes`
0%{ transform: rotate(0deg);
}
100%{transform:rotate(360deg);
}`;

export const SvgWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const StyledSvg = styled.svg`
  max-width: 91px;
  max-height: 91px;
  fill: #f5f5fa;
  animation: ${rotation} 1.3s linear infinite;
`;

export const AnimatedContent = styled.g`
  animation: ${rotation} 1s linear infinite;
`;
