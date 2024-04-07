import DangerIcon from "./components";
import {
  ErrorButton,
  ErrorButtonText,
  ErrorMessageWrapper,
  MessageHeader,
  MessageInfo,
} from "./styled";

const ErrorPage = () => {
  return (
    <>
      <DangerIcon />
      <ErrorMessageWrapper>
        <MessageHeader>Ooops! Something went wrong...</MessageHeader>
        <MessageInfo>
          Please check your network connection and try again
        </MessageInfo>
        <ErrorButton>
          <ErrorButtonText>Back to home page</ErrorButtonText>
        </ErrorButton>
      </ErrorMessageWrapper>
    </>
  );
};

export default ErrorPage;
