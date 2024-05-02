import { useHistory } from "react-router-dom";
import DangerIcon from "./components";
import {
  ErrorButton,
  ErrorButtonText,
  ErrorMessageWrapper,
  MessageHeader,
  MessageInfo,
} from "./styled";

const ErrorPage = () => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push("/movies");
  };

  return (
    <>
      <DangerIcon />
      <ErrorMessageWrapper>
        <MessageHeader>Ooops! Something went wrong...</MessageHeader>
        <MessageInfo>
          Please check your network connection and try again
        </MessageInfo>
        <ErrorButton>
          <ErrorButtonText onClick={handleOnClick}>
            Back to home page
          </ErrorButtonText>
        </ErrorButton>
      </ErrorMessageWrapper>
    </>
  );
};

export default ErrorPage;
