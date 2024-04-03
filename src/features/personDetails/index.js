import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoadingState } from "../../Redux_store/settingSlice";
import {
  BirthInfo,
  BirthInfoContainer,
  CastCrewWrapper,
  DescriptionWrapper,
  Header,
  Image,
  Paragraph,
  TopTileWrapper,
} from "./styled";
import { MovieTile } from "../movieList/components/MovieTile";
import profileDefaultImage from "./profileDefaultImage.png";
import { TilesContainer } from "../movieList/styled";

const ProfileDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingState("loading"));
  }, []);

  return (
    <>
      <TopTileWrapper>
        <Image src={profileDefaultImage} alt="ProfileImage" />
        <DescriptionWrapper>
          <Header>Liu Yifei</Header>
          <BirthInfoContainer>
            <BirthInfo>
              <Paragraph grey={true.toString()}>Date of birth:</Paragraph>
              <Paragraph> 25.08.1987</Paragraph>
            </BirthInfo>
            <BirthInfo>
              <Paragraph grey={true.toString()}>Place of birth:</Paragraph>
              <Paragraph>Wuhan, Hubei, China</Paragraph>
            </BirthInfo>
          </BirthInfoContainer>
          <Paragraph biography={`${true}`}>
            Liu Yifei was born in Wuhan, Hubei, Province of China on August
            25th, 1987. She began modeling at the age of 8 and was trained in
            singing, dancing and the piano. Moving to the United States at 10
            with her mother, Liu lived there for four years.
          </Paragraph>
        </DescriptionWrapper>
      </TopTileWrapper>
      <CastCrewWrapper>
        <Header>Movies - cast (nr)</Header>
        <TilesContainer>
          <MovieTile />
          <MovieTile />
          <MovieTile />
          <MovieTile />
          <MovieTile />
          <MovieTile />
          <MovieTile />
          <MovieTile />
        </TilesContainer>
      </CastCrewWrapper>
      <CastCrewWrapper second={`${true}`}>
        <Header>Movies - crew (nr)</Header>
        <TilesContainer>
          <MovieTile />
          <MovieTile />
          <MovieTile />
          <MovieTile />
          <MovieTile />
          <MovieTile />
          <MovieTile />
          <MovieTile />
        </TilesContainer>
      </CastCrewWrapper>
    </>
  );
};

export default ProfileDetails;
