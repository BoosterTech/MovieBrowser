import { AnimatedContent, StyledSvg, SvgWrapper } from "./styled";

export const LoadingSpinner = () => {
  return (
    <SvgWrapper>
      <StyledSvg xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="45.5"
          cy="45.5"
          r="39.8125"
          stroke="#DDDDEE"
          strokeWidth="11.375"
        />
        <path
          d="M73.6517 17.3483C81.118 24.8146 85.3125 34.9411 85.3125 45.5C85.3125 56.0589 81.118 66.1854 73.6517 73.6517"
          stroke="black"
          strokeWidth="11.375"
        />
      </StyledSvg>
    </SvgWrapper>
  );
};
