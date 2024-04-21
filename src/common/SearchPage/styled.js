import { styled } from "styled-components";
import { showin } from "../../features/movieList/styled";

export const MessageHeader = styled.h1`
  width: auto;
  height: 43px;
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  text-align: left;
  color: black;
  margin: 57px auto auto 276px;
  animation: ${showin} 0.5s ease-in-out;
`;
