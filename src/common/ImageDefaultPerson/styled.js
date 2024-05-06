import styled from "styled-components";

export const DefaultImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.Gray};
  width: 176px;
  height: 231px;
  border-radius: 5px;
  margin-top: 16px;


  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 120px;
    height: 178px;
    margin: 8px;
  }
`;
