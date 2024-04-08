import { styled } from "styled-components";

export const ForMobile = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const TopTileWrapperMedia = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    max-width: 1100px;
    //height: auto;
    height: 365px;
    margin: 23px auto 24px;
    border: solid;
`;

export const PersonImageDataContainer = styled.div`
    border: solid;
    display: grid;
    gap: 16px;
    margin: 16px;
    grid-template-columns: auto 1fr;
`

export const HeaderMobile = styled.h1`
    font-size: 14px;
    font-weight: 500;
`

export const DataContainer = styled.div`
    
`