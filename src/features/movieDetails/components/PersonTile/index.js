import ImageDefaultPerson from "../ImageDefaultPerson";
import { PersonName, TileImage, TileWrapper, PersonCharacter } from "./styled";

export const PersonTile = ({ imageSrc, name, character }) => {
  return (
    <TileWrapper>
      {imageSrc ? <TileImage src={imageSrc} /> : <ImageDefaultPerson />}
      <PersonName>{name}</PersonName>
      <PersonCharacter>{character}</PersonCharacter>
    </TileWrapper>
  );
};
