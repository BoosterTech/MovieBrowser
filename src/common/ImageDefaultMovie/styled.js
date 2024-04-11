import styled from "styled-components";

export const DefaultImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  width: 292px;
  height: 427px;
  margin: auto;
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 114px;
    height: 169px;
  }
`;
