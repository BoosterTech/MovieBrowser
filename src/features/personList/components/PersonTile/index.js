import { PersonName, TileImage, TileWrapper } from "./styled";
import defaultpersonImage from "./defaultPersonImage2.jpg";

export const PersonTile = () => {
  return (
    <TileWrapper>
      <TileImage src={defaultpersonImage} />
      <PersonName>I mokrego dyngusa</PersonName>
    </TileWrapper>
  );
};
