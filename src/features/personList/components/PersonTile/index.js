import ImageDefaultPerson from "../../../../common/ImageDefaultPerson";
import { PersonName, TileImage, TileWrapper } from "./styled";

export const PersonTile = ({ imageSrc, name, noHover = false }) => {
  return (
    <TileWrapper noHover={noHover}>
      {imageSrc ? <TileImage src={imageSrc} /> : <ImageDefaultPerson />}
      <PersonName>{name}</PersonName>
    </TileWrapper>
  );
};
