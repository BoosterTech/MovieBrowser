import { PersonTile } from "./components/PersonTile";
import { ContentWrapper, ContentHeader, TilesWrapper } from "./styled";

const PersonList = () => {
  return (
    <ContentWrapper>
      <ContentHeader>Popular People</ContentHeader>
      <TilesWrapper>
        <PersonTile />
        <PersonTile /> 
        <PersonTile />
        <PersonTile />
        <PersonTile />
        <PersonTile />
        <PersonTile />
        <PersonTile /> 
        <PersonTile />
        <PersonTile />
        <PersonTile />
        <PersonTile />
      </TilesWrapper>
    </ContentWrapper>
  );
};
export default PersonList;
