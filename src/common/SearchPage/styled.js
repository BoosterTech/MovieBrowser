import { styled } from "styled-components";
import { showin } from "../showin_animation";

export const MessageHeader = styled.h1`
  width: auto;
  height: 43px;
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  text-align: left;
  color: ${({ theme }) => theme.color.Black};
  margin: 56px auto auto 276px;
  animation: ${showin} 0.3s ease;
`;
