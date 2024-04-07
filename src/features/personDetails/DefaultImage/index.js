import { ReactComponent as Icon } from "../../../assets/images/defaultIconPerson.svg";
import { DefaultImageWrapper, ProfileImage } from "./styled";

const ImageProfile = ({ imageSrc }) => {
  return (
    <>
      {imageSrc ? (
        <ProfileImage src={imageSrc} alt="ProfileImage" />
      ) : (
        <DefaultImageWrapper>
          <Icon />
        </DefaultImageWrapper>
      )}
    </>
  );
};

export default ImageProfile;
