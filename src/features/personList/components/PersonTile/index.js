import { PersonName, TileImage, TileWrapper } from "./styled";
import defaultpersonImage from "./defaultPersonImage.png";

export const PersonTile = () => {
  return (
    <TileWrapper>
      <TileImage src={defaultpersonImage} />
      <PersonName>Anna</PersonName>
    </TileWrapper>
  );
};
