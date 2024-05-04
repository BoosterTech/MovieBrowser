import styled from "styled-components";
import { showin } from "../../common/showin_animation";


export const TopTileContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 64px;
  animation: ${showin} .5s linear;
`;

export const Content = styled.div`
  margin: 0 auto;
  margin-bottom: 336px;
  animation: ${showin} 1s linear;
`;
