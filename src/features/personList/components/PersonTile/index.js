import ImageDefaultPerson from "../../../../common/ImageDefaultPerson";
import { PersonName, TileImage, TileWrapper } from "./styled";

export const PersonTile = ({ imageSrc, name }) => {
  return (
    <TileWrapper>
      {imageSrc ? <TileImage src={imageSrc} /> : <ImageDefaultPerson />}
      <PersonName>{name}</PersonName>
    </TileWrapper>
  );
};
