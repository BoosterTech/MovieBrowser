import { styled } from "styled-components";

export const ForMobile = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    display: none;
  }
`;

export const TopTileWrapperMedia = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  background-color: #ffffff;
  max-width: 1045px;
  height: auto;
  margin: 23px auto 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobilrPeopleMedium}px) {
    max-width: 450px;
  }
`;

export const PersonImageDataContainer = styled.div`
  display: grid;
  gap: 16px;
  margin: 16px;
  grid-template-columns: auto 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobilePeopleMedium}px) {
  }
`;

export const DataContainer = styled.div`
  // border: solid;
`;

export const BirthInfoMobile = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 0px 0px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobilePeopleMedium}px) {
  }
`;

export const HeaderMobile = styled.h1`
  height: 43px;
  font-weight: 600;
  font-size: 26px;
  line-height: 43.2px;
  margin: 0 0 24px 0;

  @media(max-width: ${({theme}) => theme.breakpoints.mobilePeopleMedium}px){
  font-size: 14px;
  font-weight: 500;
  margin: 4px 6px 16px 0px;
  }
`;

export const ParagraphMobile = styled.p`
  margin: 0 0 8px 0;
  font-size: 12px;
  line-height: 14.4px;

  ${(props) => props.grey && `color: grey;`}
  ${(props) =>
    props.biography &&
    ` font-weight:400;
      line-height:32px;
      font-size:20px;
  `}

@media(max-width: ${({ theme }) => theme.breakpoints.mobilrPeopleMedium}px) {
  }
`;

export const ParagraphContainer = styled.div`
  margin: 0 17px 16px 17px;
  font-size: 14px;
  line-height: 22.4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobilrPeopleMedium}px) {
    font-size: 14px;
    line-height: 22.4px;
  }
`;
