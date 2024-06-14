import styled from "styled-components";

export const DefaultImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.Gray};
  width: 399px;
  height: 564px;
  margin: 0;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.disabled}) {
    margin-top: 0;
    width: 180px;
    height: 260px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    max-width: 116px;
    max-height: 163px;
  }
`;

export const ProfileImage = styled.img`
  width: 399px;
  height: 564px;

  @media (max-width: ${({ theme }) => theme.breakpoints.disabled}) {
    max-width: 180px;
    max-height: 260px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    max-width: 116px;
    max-height: 163px;
  }
`;
