import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoadingState } from "../../Redux_store/settingSlice";
import {
  BirthInfo,
  BirthInfoContainer,
  DescriptionWrapper,
  Image,
  Paragraph,
  ProfileName,
  TopTileWrapper,
} from "./styled";
import profileDefaultImage from "./profileDefaultImage.png";

const ProfileDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingState("loading"));
  }, []);

  return (
    <TopTileWrapper>
      <Image src={profileDefaultImage} alt="ProfileImage" />
      <DescriptionWrapper>
        <ProfileName>Liu Yifei</ProfileName>
        <BirthInfoContainer>
          <BirthInfo>
            <Paragraph grey>Date of birth:</Paragraph>
            <Paragraph> 25.08.1987</Paragraph>
          </BirthInfo>
          <BirthInfo>
            <Paragraph grey>Place of birth:</Paragraph>
            <Paragraph>Wuhan, Hubei, China</Paragraph>
          </BirthInfo>
        </BirthInfoContainer>
        <Paragraph biography>
          Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th,
          1987. She began modeling at the age of 8 and was trained in singing,
          dancing and the piano. Moving to the United States at 10 with her
          mother, Liu lived there for four years.
        </Paragraph>
      </DescriptionWrapper>
    </TopTileWrapper>
  );
};

export default ProfileDetails;
