import { styled } from "styled-components";

export const TopTileWrapper = styled.div`
  display: flex;
  color: black;
  background-color: #ffffff;
  max-width: 1368px;
  min-height: 570px;
  padding: 40px;
  margin: 56px auto 0 auto;
`;

export const DescriptionWrapper = styled.div`
  width: 849px;
  min-height: 255px;
  padding: 8px 0;
  margin: 0;
  margin-left: 40px;
`;

export const Image = styled.img`
  width: 399px;
  height: 564px;
  border-radius: 5px;
`;

export const Header = styled.h1`
  height: 43px;
  font-weight: 600;
  font-size: 36px;
  line-height: 43.2px;
  margin: 0 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 20px;
    line-height: 24px;
    margin: 0 0 16px 0;
    height: 20px;
  }
`;

export const BirthInfoContainer = styled.div`
  min-height: 52px;
  max-width: 320px;
  margin: 0 0 24px 0;
`;

export const BirthInfo = styled.div`
  display: flex;
  gap: 10px;
  margin: 8px 0;
  align-items: center;
  justify-content: flex-start;
`;

export const Paragraph = styled.span`
  display: block;
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  height: 22px;
  white-space: nowrap;

  ${(props) =>
    props.$grey &&
    `
     width: auto;
     color: grey;
  `}

  ${(props) =>
    props.$biography &&
    ` font-weight:400;
      line-height:32px;
      font-size:20px;
      margin-top:24px;
      white-space:wrap;
  `}
`;

export const CastCrewWrapper = styled.div`
  min-height: 750px;
  max-width: 1368px;
  margin: 64px auto;

  ${(props) => props.$second && `margin-bottom:220px;`}

  @media(max-width: ${({ theme }) => theme.breakpoints.desktopMini}px) {
    margin: 24px 16px;
  }
`;

export const ForDesktop = styled.div`
  @media(max-width: ${({theme}) => theme.breakpoints.disabled}px){
    display: none;
  }
`;
