import ImageDefault from "../ImageDefault";
import { PersonName, TileImage, TileWrapper } from "./styled";

export const PersonTile = ({ imageSrc, name }) => {
  return (
    <TileWrapper>
      {imageSrc ? <TileImage src={imageSrc} /> : <ImageDefault />}
      <PersonName>{name}</PersonName>
    </TileWrapper>
  );
};
