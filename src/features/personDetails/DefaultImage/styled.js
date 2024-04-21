import styled from "styled-components";

export const DefaultImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.Gray};
  width: 399px;
  height: 564px;
  margin: auto;
  margin-top: 16px;
  border-radius: 5px;
`;

export const ProfileImage = styled.img`
  width: 399px;
  height: 564px;
  
  @media(max-width: ${({theme}) => theme.breakpoints.disabled}px){
    max-width:  180px;
    max-height: 260px;
  }

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px){
    max-width: 116px;
    max-height: 163px;
  }

`;
