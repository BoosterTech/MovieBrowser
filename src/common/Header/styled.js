import styled from "styled-components";

export const StyledHeader = styled.section`
  background-color: ${({ theme }) => theme.color.black};
  max-width: 100%;
  height: 94px;
  color: white;
  padding:0px;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    height: 142px;
  }
`;

export const StyledUnit = styled.div`
  max-width: 1600px;
  height: 94px;
  margin: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0px;
    height: 142px;
    align-items: center;
    margin: 0 20px;
  }
`;

export const StyledItems = styled.div`
  height: 70px;
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledSearch = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;

export const Styledlink = styled.a`
  max-width: 220px;
  height: 48px;
  font-size: 24px;
  line-height: 40px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 12px;
    margin-right: 0px;
  }
`;
export const StyledContainerButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

export const StyledButton = styled.button`
  border: 1px solid;
  max-width: 120px;
  height: Fixed (48px) px;
  padding: 8px 24px 8px 24px;
  border-radius: 24px;
  background-color: transparent;
  color: white;
  margin: 10px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin: 0px;
  }
`;
