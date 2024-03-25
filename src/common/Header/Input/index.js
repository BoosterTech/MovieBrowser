import styled from "styled-components";

export default styled.input`
  padding: 23px;
  width: 432px;
  // height: 48px;
  gap: 0px;
  border-radius: 33px;
  border: 1px 0px 0px 0px;
  opacity: 0px;


  @media(max-width: ${({theme}) => theme.media.tablet}){
    margin: auto;
    width: 100%;
  }
`;
